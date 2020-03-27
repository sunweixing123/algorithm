const express = require("express");
const app = express();
function getName() {
  console.log("say name")
}
app.get("/", (req, res, next) => {
  res.send("hello world")
  console.log(res.name)
  next();
  console.log("name", res.name);
}, (req, res, next) => {
  res.name = "sunweixing" // 给res赋值
  console.log(res.age)
  next();
  console.log("age" ,res.age)
}, (req, res, next) => {
  res.age = 23
})

app.listen("3005", () => {
  console.log("listen on 3005")
});