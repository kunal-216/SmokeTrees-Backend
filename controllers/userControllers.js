import userModel from "../models/userModel.js"
import addressModel from "../models/addressModel.js"
import bcrypt from "bcrypt"
import validator from "validator"

const createUser = async (req, res) => {
    try {
        const { name, email, password, address } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" })
        }
        if (!name || !address) {
            return res.status(400).json({ message: "Name and address are required" })
        }
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).json({ message: "User already exists" });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid email" });
        }

        if (password.length < 8) {
            return res.status(400).json({ message: "Please enter a strong password" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new userModel({
            name,
            email,
            password: hashedPassword,
            address
        });
        await user.save();

        const userAddress = new addressModel({
            address,
            user: user._id,
        });
        await userAddress.save();
        res.status(201).json({ message: 'User and Address created successfully' });
    } catch (error) {
        console.log(error)
        res.status(501).json({ message: error });
    }
}

export { createUser }