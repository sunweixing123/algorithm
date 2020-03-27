const http = require('http');
const url = require('url');

function start(route) {
  http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("hello world");
    // 执行route
    route(pathname);
    res.end();
  }).listen("3000");
}
exports.start = start;
