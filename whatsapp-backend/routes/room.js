import express from "express";
import room from "./../controllers/room.js";

const router = new express.Router();

router.get("/sync", room.get);

router.post("/new", room.post);

export default router;
