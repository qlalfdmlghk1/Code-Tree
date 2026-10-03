const fs = require("fs")
let a = Number(fs.readFileSync(0).toString())
let answer = a + 1.5
console.log(answer.toFixed(2))