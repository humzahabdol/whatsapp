import mongoose from "mongoose";

export async function getConnection(pusher) {
  const connection_url =
    "mongodb+srv://admin:dTbNOEJFogiGkBcI@cluster0.5xyaf.mongodb.net/whatsappdbha?retryWrites=true&w=majority";
  mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.once("open", () => {
    console.log("DB connected");
    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

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
        console.log("Error triggering Pusher");
      }
    });
  });
}

export default { getConnection };
