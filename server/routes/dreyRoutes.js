import express from "express";
import axios from "axios";
import * as dotenv from "dotenv";
import Post from "../mongodb/models/post.js";

dotenv.config();

const router = express.Router();

const PEXELS_API_KEY = process.env.PEXELS_API_KEY;

router.route("/").get((req, res) => {
  res.send("Hello from DREY_AI!");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await axios.get("https://api.pexels.com/v1/search", {
      params: {
        query: prompt,
        per_page: 1,
      },
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    });

    if (response.data.photos.length === 0) {
      return res.status(404).json({ error: "No images found" });
    }

    const image = response.data.photos[0].src.original;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send(error?.response?.data?.error?.message || "Something went wrong");
  }
});

export default router;
