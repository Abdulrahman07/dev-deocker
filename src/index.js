const express = require("express");
const mongoose = require("mongoose");
const redis = require("redis");

// Init app
const PORT = process.env.PORT || 3000;
const app = express();

// Connect Redis
const REDIS_PORT = 6379;
const REDIS_HOST = "redis";

redis
  .createClient({
    url: `redis://@${REDIS_HOST}:${REDIS_PORT}`,
  })
  .on("connect", () => console.log("Connected to redis  successfully..."))
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();

// Connect Monngo-db
const DB_USER = "root";
const DB_PASSWORD = "example";
const DB_PORT = 27017;

const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@mongo:${DB_PORT}`;
mongoose
  .connect(URI)
  .then(() => console.log("Connected to db Successfully..."))
  .catch((err) => console.log("Failed to connect to db:", err));

// Connect Postges
// require("../prisma/client");

app.get("/", (req, res) => res.send("<h1>Test docker hub.<h1/>"));
app.listen(PORT, () => console.log(`The server is runing on port ${PORT}`));
