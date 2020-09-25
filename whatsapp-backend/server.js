import express from "express";
import Pusher from "pusher";
import cors from "cors";
import health from "./routes/health.js";
import message from "./routes/messages.js";
import room from "./routes/room.js";
import dbconfig from "./services/dbconfig.js";

// app config
const app = express();
const port = process.env.PORT || 9000;
const pusher = new Pusher({
  appId: "1078394",
  key: "45269330fa99db0ee296",
  secret: "63713b141496a4ee940b",
  cluster: "us3",
  encrypted: true,
});

// middleware
app.use(express.json());
app.use(cors());

// dbconfig
dbconfig.getConnection(pusher);

// api routes

app.use("/", health);
app.use("/messages", message);
app.use("/rooms", room);

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
