import express from "express";
import health from "./../controllers/health.js";

const router = new express.Router();

router.get("/", health.get);

export default router;
