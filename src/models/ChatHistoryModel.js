import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    userName: {
        type: String,
        required: false
    },
    userPrompt: {
        type: String,
        required: true
    },
    response: {
        type: String,
        required: true
    },
    uuid: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ChatHistoryModel = mongoose.models.chatHistory || mongoose.model("chatHistory", Schema);
export default ChatHistoryModel;