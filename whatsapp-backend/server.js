import express from "express";
import cors from "cors";
import health from "./routes/health.js";
import message from "./routes/messages.js";
import room from "./routes/room.js";
import dbconfig from "./services/dbconfig.js";

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use(cors());

// dbconfig
dbconfig.getConnection();

// api routes

app.use("/", health);
app.use("/messages", message);
app.use("/rooms", room);

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
