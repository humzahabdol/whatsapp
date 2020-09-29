import Messages from "../middlewares/dbMessages.js";
import room from "./room.js";

export async function get(req, res, _next) {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

export async function post(req, res, _next) {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
}

export async function getChatByRoomId(req, res, _next) {
  const roomId = req.params.roomId;
  Messages.find({ roomId: roomId }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  }).sort({ timestamp: 1 });
}

export default { get, post, getChatByRoomId };
