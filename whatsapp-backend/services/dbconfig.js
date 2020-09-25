import mongoose from "mongoose";
import Pusher from "pusher";

const connection_url =
  "mongodb+srv://admin:dTbNOEJFogiGkBcI@cluster0.5xyaf.mongodb.net/whatsappdbha?retryWrites=true&w=majority";

const pusher = new Pusher({
  appId: "1078394",
  key: "45269330fa99db0ee296",
  secret: "63713b141496a4ee940b",
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
    initializeMessagePusher(messageChangeStream, pusher);
  });
}

function initializeMessagePusher(changeStream) {
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

export default { getConnection };
