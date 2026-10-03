const fs = require("fs")
let [c,a,b] = fs.readFileSync(0).toString().trim().split("\n");

console.log(c)
console.log(Number(a).toFixed(2))
console.log(Number(b).toFixed(2))