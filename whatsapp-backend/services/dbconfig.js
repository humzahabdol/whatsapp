import mongoose from "mongoose";
import Pusher from "pusher";

const connection_url =
  "mongodb+srv://admin:dTbNOEJFogiGkBcI@cluster0.5xyaf.mongodb.net/whatsappdbha?retryWrites=true&w=majority";

const pusherMessages = new Pusher({
  appId: "1078394",
  key: "45269330fa99db0ee296",
  secret: "63713b141496a4ee940b",
  cluster: "us3",
  encrypted: true,
});
const pusherRooms = new Pusher({
  appId: "1080718",
  key: "5a0b22b08a77399c562f",
  secret: "4f8405d33d7267d112dd",
  cluster: "us3",
  encrypted: true,
});

export async function getConnection() {
  mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.once("open", () => {
    console.log("DB connected");
    const messageCollection = db.collection("messagecontents");
    const messageChangeStream = messageCollection.watch();
    initializeMessagePusher(messageChangeStream);

    const roomCollection = db.collection("rooms");
    const roomChangeStream = roomCollection.watch();
    initializeRoomPusher(roomChangeStream);
  });
}

function initializeMessagePusher(changeStream) {
  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusherMessages.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
        roomId: messageDetails.roomId,
      });
    } else {
      console.log("Error triggering message Pusher");
    }
  });
}

function initializeRoomPusher(changeStream) {
  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      const roomDetails = change.fullDocument;
      pusherRooms.trigger("rooms", "inserted", {
        name: roomDetails.name,
      });
    } else {
      console.log("Error triggering room pusher");
    }
  });
}

export default { getConnection };
