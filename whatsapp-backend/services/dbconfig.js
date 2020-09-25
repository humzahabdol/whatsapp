import mongoose from "mongoose";

const connection_url =
  "mongodb+srv://admin:dTbNOEJFogiGkBcI@cluster0.5xyaf.mongodb.net/whatsappdbha?retryWrites=true&w=majority";

export async function getConnection(pusher) {
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
    initializeMessagePusher(messageChangeStream, pusher);

    const roomCollection = db.collection("rooms");
    const roomChangeStream = roomCollection.watch();
    initializeRoomPusher(roomChangeStream, pusher);
  });
}

function initializeMessagePusher(changeStream, pusher) {
  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error triggering message Pusher");
    }
  });
}

function initializeRoomPusher(changeStream, pusher) {
  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      const roomDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: roomDetails.name,
        message: roomDetails.message,
        avatar: roomDetails.avatar,
      });
    } else {
      console.log("Error triggering  message Pusher");
    }
  });
}

export default { getConnection };
