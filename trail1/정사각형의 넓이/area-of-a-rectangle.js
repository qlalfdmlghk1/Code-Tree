const fs = require("fs")
let N = Number(fs.readFileSync(0).toString().trim())

const di = N ** 2

console.log(di)
if (N < 5) console.log("tiny")