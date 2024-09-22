import express from "express";
import { connectDB } from "./config/db.js"
import userRoutes from "./routes/userRoute.js"

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());

app.use("/api", userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})