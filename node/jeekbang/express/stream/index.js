const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.status(200)
  fs.createReadStream("./index.html").pipe(res);
  // res.send(fs.readFileSync('./index.html', "utf-8"));
  // res.send("xxx")
})

app.listen("3009", () => {
  console.log("listen on 3009")
})