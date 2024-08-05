import mongoose from "mongoose";
import ChatHistoryModel from "@/models/ChatHistoryModel.js";

// MongoDB connection URL and options
const dbUrl = "mongodb://localhost:27017/test/";
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Function to connect to MongoDB
const connectDB = async () => {
    if (mongoose.connection.readyState === 0) {
        try {
            await mongoose.connect(dbUrl, dbOptions);
            console.log("Connected to MongoDB");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
        }
    }
};

// GET request handler
export async function GET(req) {
    await connectDB(); // Ensure database connection

    if (req.method !== "GET") {
        return new Response(JSON.stringify({message: "Method not allowed"}), {status: 405});
    }

    try {
        const chatHistories = await ChatHistoryModel.find(); // Fetch all chat history records
        return new Response(JSON.stringify(chatHistories), {status: 200});
    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response(JSON.stringify({message: "Internal server error"}), {status: 500});
    }
}

// POST request handler
export async function POST(req) {
    await connectDB(); // Ensure database connection

    if (req.method !== "POST") {
        return new Response(JSON.stringify({message: "Method not allowed"}), {status: 405});
    }

    let body;
    try {
        body = await req.json(); // Parse request body
    } catch (error) {
        console.error("Error parsing request body:", error);
        return new Response(JSON.stringify({message: "Invalid request body"}), {status: 400});
    }

    const {userName, userPrompt, response, uuid} = body;

    if (!userPrompt || !response) {
        return new Response(JSON.stringify({message: "userPrompt and response are required"}), {status: 400});
    }

    try {
        // Create and save new chat history document
        const newChatHistory = new ChatHistoryModel({userName, userPrompt, response, uuid});
        await newChatHistory.save();
        return new Response(JSON.stringify({message: "Data added successfully"}), {status: 201});
    } catch (error) {
        console.error("Error adding data:", error);
        return new Response(JSON.stringify({message: "Internal server error"}), {status: 500});
    }
}