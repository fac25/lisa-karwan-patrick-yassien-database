const express = require("express");
const {home} = require("./templates.js");

const server = express();

server.get("/", (req, res) => {
    res.send(home());
  });



  module.exports = server;

