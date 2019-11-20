const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

require("dotenv").config();

const server = express();

const authRoutes = require("../Authentication/Routes/AuthRoutes");
const issueRoutes = require("../Issues/Routes/IssueRoutes");
const userRoutes = require("../Users/Routes/UserRoutes");
const votesRoutes = require("../Votes/Routes/VotesRoutes");

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth/", authRoutes);
server.use("/api/", issueRoutes);
server.use("/api/", userRoutes);
server.use("/api/", votesRoutes);

server.get("/api/docs", (req, res) => {
  res.redirect("https://documenter.getpostman.com/view/8105818/SW7Z4U2y?version=latest");
});

module.exports = server;
