// import mongoose from 'mongoose';
//
// // MongoDB connection URL and options
// const dbUrl = "mongodb://localhost:27017/test/";
// const dbOptions = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// };
//
// // Function to connect to MongoDB
// const connectDB = async () => {
//     if (mongoose.connection.readyState === 0) {
//         try {
//             await mongoose.connect(dbUrl, dbOptions);
//             console.log("Connected to MongoDB");
//         } catch (error) {
//             console.error("Error connecting to MongoDB:", error);
//         }
//     }
// };
//
// export default connectDB;
import mongoose from "mongoose";

const dbUrl = "mongodb://localhost:27017/test";
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

let cachedConnection = null;

const connectDB = async () => {
    if (cachedConnection) {
        return cachedConnection;
    }

    if (mongoose.connection.readyState === 0) {
        try {
            cachedConnection = await mongoose.connect(dbUrl, dbOptions);
            // console.log("Connected to MongoDB");
            return cachedConnection;
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            throw error;
        }
    }
};

export default connectDB;