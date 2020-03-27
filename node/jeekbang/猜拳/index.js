let argv = process.argv[process.argv.length - 1];
let num = Math.random() * 100;
console.log("你出"+ argv)
console.log("我出"+ num)
if (argv > num) {
  console.log("你赢了")
} else {
  console.log("我赢了")
}

