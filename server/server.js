/**
 * @file This file contains the server configuration and routes for the NEM Server Template.
 * @module server
 */

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import corsMiddleware from "./middlewares/cors.js";
import userRouter from "./routes/userRoutes.js";
import { authenticateMiddleware } from "./middlewares/apiKey.js";
import process from "process";
import { limiter } from "./middlewares/limiter.js";
import blogRouter from "./routes/blogRoutes.js";

console.log("Running " + process.env.SERVER_NAME);

dotenv.config();

/**
 * Connects to the MongoDB database using the provided URI.
 * @returns {Promise<void>} A promise that resolves when the connection is established.
 * @throws {Error} If there is an error connecting to the database.
 */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

// app.use(limiter);
app.use(corsMiddleware);
// app.use(authenticateMiddleware); // Based on Your Need choose cors or authenticateMiddleware (apiKey & apiSecret) or use both if needed!

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Endpoint to check if the server is running.
 * @name GET /check
 * @function
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
app.get("/check", (req, res) => {
  res.send("ok");
});

app.use("/user", userRouter);
app.use("/blog", blogRouter);
const fallbackPort = 5000;

/**
 * The port number for the server.
 * @type {number}
 */
const port = process.env.PORT || fallbackPort;

!process.env.PORT &&
  console.log(
    `Seems Like You Havent Set The PORT in .env file going for the fallback port : ${fallbackPort}!`
  );

parseInt(port) == 0 &&
  console.log(
    "Port is 0 Maybe You are In Test Envoirment Consider Changing the Port For Production!"
  );

console.log(`Running on port ${port}`);

/**
 * Starts the server and listens for incoming requests on the specified port.
 * @param {number} port - The port number to listen on.
 * @returns {void}
 */
app.listen(port, () => {
  console.log(`REST API Serving at ${process.env.URL}:${port}`);
});

export default app;
