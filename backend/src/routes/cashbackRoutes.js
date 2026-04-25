// src/routes/cashbackRoutes.js
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { app: "PhonePe", amount: 120, expires: "2 days" },
    { app: "GPay", amount: 80, expires: "1 day" }
  ]);
});

export default router;