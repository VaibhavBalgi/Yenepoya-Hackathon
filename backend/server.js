// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./src/config/db.js";
import transactionRoutes from "./src/routes/transactionRoutes.js";
import cashbackRoutes from "./src/routes/cashbackRoutes.js";
import subscriptionRoutes from "./src/routes/subscriptionRoutes.js";
import recoveryRoutes from "./src/routes/recoveryRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/transactions", transactionRoutes);
app.use("/api/cashback", cashbackRoutes);
app.use("/api/subscriptions", subscriptionRoutes);
app.use("/api/recovery", recoveryRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);