const fs = require("fs")
let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let answer = ((a+b) / (a-b)).toFixed(2)
console.log(answer)