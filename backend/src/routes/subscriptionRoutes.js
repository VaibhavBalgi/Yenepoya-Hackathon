// src/routes/subscriptionRoutes.js
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { name: "Netflix", amount: 199, frequency: "monthly" },
    { name: "Spotify", amount: 119, frequency: "monthly" }
  ]);
});

export default router;