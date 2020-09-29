import express from "express";
import room from "./../controllers/room.js";

const router = new express.Router();

router.get("/sync", room.get);

router.post("/new", room.post);

router.get("/:id", room.getById);

export default router;
