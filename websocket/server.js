const path = require("path");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const webSocket = require("ws");

const wss = new webSocket.Server({server: server});

wss.on("connection", (ws) => {
  // 监听客户端发来的消息
  ws.on("message", (message) => {
    console.log(wss.clients.length);
    const msgData = JSON.stringify(message);
    if (msgData.type === "open") {
      // 初始连接时标识绘画
      ws.sessionId = `${msgData.fromUserId}-${msgData.toUserId}`
    } else {
      let sessionId = `${msgData.toUserId}-${msgData.fromUserId}`;
      wss.clients.forEach(client => {
        if (client.sessionId = sessionId) {
          client.send(message); // 给对应的客户端发送消息
        }
      })
    }
  })
  ws.on("close", () => {
    console.log("连接关闭");
  })
})

server.listen(9000, function () {
  console.log('http://localhost:9000');
});