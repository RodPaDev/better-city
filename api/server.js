const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

require("dotenv").config();

const server = express();

const authRoutes = require("../Authentication/Routes/AuthRoutes");
const issueRoutes = require("../Issues/Routes/IssueRoutes");

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth/", authRoutes);
server.use("/api/", issueRoutes)

server.get("/", (req, res) => {
  res.send("<h1>Hello, I am running. Are you running?</h1>");
});

module.exports = server;
