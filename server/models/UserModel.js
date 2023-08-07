import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
});

const User = mongoose.model('User', taskSchema);
export default User;
