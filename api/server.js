const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

require('dotenv').config()

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.get("/", (req, res) => {
    res.send("<h1>Hello, I am running. Are you running?")
})

module.exports = server;