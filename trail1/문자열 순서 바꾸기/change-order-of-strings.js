const fs = require("fs")
let [S,T] = fs.readFileSync(0).toString().trim().split("\n")

console.log(T)
console.log(S)