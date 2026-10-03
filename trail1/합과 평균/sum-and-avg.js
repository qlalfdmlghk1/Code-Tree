const fs = require("fs")
let [A,B] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
console.log(A+B, ((A+B)/2).toFixed(1))