const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring")

http.createServer((req, res) => {
  if (req.url == "/favicon.ico") {
    return;
  }
  let resUrl = url.parse(req.url);
  let pathName = resUrl.pathname;
  let query = querystring.parse(resUrl.query)
  let fileName = "./www" + pathName
  console.log(fileName)
  // console.log(url.parse(req.url))
  console.log(query)
  fs.readFile(fileName, (err, data) => {
    if (err) {
      res.write('404');
    } else {
      res.write(data);
    }
    res.end();
  });


  //处理post请求
  // res.on("data", data => { // 大数据会分段传输，data是数据段，
  //   console.log(data);
  // })
  // res.on("end", () => { // 监听数据传输完成事件
  //   console.log("传输完成")
  // })
}).listen("3003");
