let http = require("http");
let fs = require("fs");

http.createServer(function(req, res) {
  let url = req.url;
  let resBody = fs.readFileSync("./index.html")
  res.setHeader("Content-Type", "text/html");
  res.end(resBody);
}).listen("3006");