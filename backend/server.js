// Import necessary packages
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// --- App Configuration ---
dotenv.config(); // Load environment variables from .env file
connectDB(); // Connect to the MongoDB database

const app = express();// importing express package 
const port = process.env.PORT || 4000;

// --- Middlewares ---
app.use(express.json()); // Allows the server to accept JSON data in the body
app.use(cors()); // Enables Cross-Origin Resource Sharing  also allow the frontend to connect with abckend 

// --- API Endpoints ---
app.get("/", (req, res) => {
    res.send("API is running...");
});

// --- Start Server ---
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
