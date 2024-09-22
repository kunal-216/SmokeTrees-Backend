import express from "express";
import {createUser} from "../controllers/userControllers.js"

const userRoute = express.Router();

userRoute.post("/user", createUser);

export default createUser;