# MERN Stack Image Generation App

🎨 **Overview**

This project leverages the MERN stack (MongoDB, Express.js, React.js, Node.js) along with Tailwind CSS to create a web application for generating images from text input using the Pexels AI model. Images are stored and managed using Cloudinary, a cloud-based image storage service.

## 🚀 Technologies Used

- **Node.js**: A JavaScript runtime environment used for building server-side applications.
- **Express.js**: A web application framework for Node.js, providing a robust set of features for building web and mobile applications.
- **MongoDB**: A NoSQL database used for storing and managing application data.
- **VITE**: A modern build tool that focuses on providing fast builds with instant server startup.
- **Tailwind CSS**: A utility-first CSS framework for building custom designs with minimal effort.
- **PEXELS AI**: A deep learning model that generates images from textual input, providing a creative tool for users.
- **Cloudinary**: A cloud-based image storage service that offers features for image upload, storage, transformation, and delivery.

## 🌟 Features

- **Image Generation**: Users can input text prompts to generate images using the Pexels AI model.
- **Cloud Storage**: Images generated are stored in Cloudinary, providing reliable storage and fast delivery.
- **Search Functionality**: Users can search for specific posts based on text input.
- **Responsive Design**: The application is designed to work seamlessly across various devices and screen sizes.

![Screenshot (488)](https://github.com/audreythando/mern-openai-image-generating-app/assets/82891759/1f8ac967-1841-4cc1-b192-5960ace8d0d2)


  ![Screenshot (491)](https://github.com/audreythando/mern-openai-image-generating-app/assets/82891759/25e27318-fde4-4b1a-903c-c328e6962a42)


## 🛠️ Getting Started

1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies**: 
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**: 
   Create a `.env` file in the root directory and add the necessary environment variables.
   
4. **Start the Server**: 
   ```bash
   npm start
   ```

5. **Access the Application**: 
   Open your web browser and navigate to `http://localhost:8080`.
   Open your web browser and navigate to `http://localhost:5173`.

## 🔑 Environment Variables

- **MONGODB_URI**: MongoDB connection URI for connecting to the database.
- **PEXELS_API_KEY**: API key for accessing the Pexels AI model.
- **CLOUDINARY_URL**: Cloudinary connection URL for accessing cloud storage services.

## 📂 Folder Structure

```
.
├── client/                  # Frontend React Application
│   ├── public/              # Public assets and HTML template
│   ├── src/                 # Source files for React components and styles
│   └── ...
├── server/                  # Backend Express.js Application
│   ├── mongodb/             # MongoDB configuration and models
│   ├── routes/              # Express.js routes for API endpoints
│   ├── utils/               # Utility functions
│   ├── .env                 # Environment variables configuration
│   └── ...
├── .gitignore               # Files and directories ignored by Git
├── README.md                # Project documentation
└── ...
```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or pull requests for any bug fixes, improvements, or new features.

## 📄 License

This project is licensed under the MIT License.
```
