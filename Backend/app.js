import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
const mongoURL = process.env.mongoURL;

mongoose.connect(mongoURL, []);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established");
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
