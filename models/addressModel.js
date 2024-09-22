import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
    address: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const addressModel = mongoose.model('address',addressSchema);
export default addressModel;