// src/routes/recoveryRoutes.js
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    urgency: "Act within 2–4 hours",
    steps: [
      "Contact your bank immediately",
      "Report in UPI app",
      "Call helpline 1930",
      "File complaint on cybercrime.gov.in"
    ]
  });
});

export default router;