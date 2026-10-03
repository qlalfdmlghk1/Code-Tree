const fs = require("fs")
let N = Number(fs.readFileSync(0).toString())
const ft = 30.48
let length = N * ft
console.log(length.toFixed(1))