const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

let readStream = fs.createReadStream("./index.html", "utf-8"); // 可读流
let content = ""

app.get("/", (req, res) => {
  let writeStream = fs.createWriteStream("./write.html"); // 可写流
  res.status(200)
  
  readStream.on("data", (data) => {
    content += data;
  })

  readStream.on("end", () => {
    console.log("end", content)
    writeStream.write(content, "utf-8");
    res.end()
  })
  readStream.on("error", () => {
    console.log("error", content)
    res.end()
  })

  
  
})

app.listen("3019", () => {
  console.log("listen on 3019")
})