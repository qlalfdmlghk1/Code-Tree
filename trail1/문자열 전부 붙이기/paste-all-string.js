const fs = require("fs")
let arr = fs.readFileSync(0).toString().split("\n")

let n = arr.shift()

console.log(arr.join(''))