import mongoose from "mongoose";

const connectDB = async (req, res) => {
    try {
        await mongoose.connect("mongodb+srv://kunaltalreja216:kunaltalreja216@cluster0.h0wjy.mongodb.net/smoketrees-project?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error)
        res.status(501).json({ message: "Error connecting MongoDB Database" });
    }
}

export { connectDB }