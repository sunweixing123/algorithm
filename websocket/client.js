const WebSocket = require("ws");
function connectWebsocket() {
  ws = new WebSocket("ws://localhost:9000");
  // 监听连接成功
  ws.onopen = () => {
    const msgData = "这是发送的消息"
    console.log("连接成功");
    ws.send(JSON.stringify(msgData));
  }
  ws.onmessage = (msg) => {
    // let message = JSON.stringify(msg);
    console.log("收到的消息", msg);

  }
  // 监听连接失败
  ws.onerror = () => {
    console.log("连接失败");
  }

  ws.onclose = () => {
    console.log("关闭连接");
  }
}
connectWebsocket();