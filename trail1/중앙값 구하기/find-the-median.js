const fs = require("fs")
let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

console.log(a+b+c - Math.max(a,b,c) - Math.min(a,b,c))