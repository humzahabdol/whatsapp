import express from "express";
import message from "./../controllers/messages.js";

const router = new express.Router();

router.get("/sync", message.get);

router.post("/new", message.post);

export default router;
