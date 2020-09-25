import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
  name: String,
  message: String,
  avatar: String,
});

export default mongoose.model("rooms", whatsappSchema);
