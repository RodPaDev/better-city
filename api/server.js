const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

require("dotenv").config();

const server = express();

const authRoutes = require("./../authentication/routes/authRoutes");
const issueRoutes = require("./../issues/routes/issueRoutes");
const userRoutes = require("./../users/routes/userRoutes");
const votesRoutes = require("./../votes/routes/votesRoutes");

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

server.get("/", (req, res) => {
  res.redirect("https://github.com/rodpa715/better-city")
})

module.exports = server;
