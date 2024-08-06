import mongoose from "mongoose";


const Schema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userAvatar: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserModel = mongoose.models.userModel || mongoose.model("user", Schema);
export default UserModel;