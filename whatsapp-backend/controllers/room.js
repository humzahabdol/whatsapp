import Rooms from "../middlewares/dbRooms.js";

export async function get(req, res, _next) {
  Rooms.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

export async function post(req, res, _next) {
  const dbMessage = req.body;

  Rooms.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
}

export async function getById(req, res, _next) {
  Rooms.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
}

export default { get, post, getById };
