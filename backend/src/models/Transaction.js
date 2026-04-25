// src/models/Transaction.js
import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  rawText: String,
  amount: Number,
  date: String
});

export default mongoose.model("Transaction", transactionSchema);