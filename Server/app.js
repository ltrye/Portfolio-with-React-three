const express = require("express");
const path = require("path");
const axios = require("axios");
const fs = require("fs");
const request = require("request");
var proxy = require("express-http-proxy");
//START EXPRESS
const app = express();

//MIDDLEWARE STATIC FILE
app.use(express.static(path.resolve(__dirname, "../dist")));

app.route("/").get((req, res) => {
  console.log(path.join(__dirname, "index.html"));
  res.sendFile(path.resolve("index.html"));
});

app.route("/home").get((req, res) => {});



module.exports = app;
