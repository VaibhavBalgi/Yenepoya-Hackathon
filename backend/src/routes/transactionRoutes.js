// src/routes/transactionRoutes.js
import express from "express";
import Transaction from "../models/Transaction.js";
import { decodeTransaction } from "../utils/decoder.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await Transaction.find();

  const decoded = data.map(tx => ({
    ...tx._doc,
    ...decodeTransaction(tx.rawText)
  }));

  res.json(decoded);
});

router.post("/", async (req, res) => {
  const newTx = await Transaction.create(req.body);
  res.json(newTx);
});

export default router;