import mongoose from "mongoose";

const whatsappSchema = mongoose.Schema({
  name: String,
  message: String,
  roomId: String,
});

export default mongoose.model("rooms", whatsappSchema);
