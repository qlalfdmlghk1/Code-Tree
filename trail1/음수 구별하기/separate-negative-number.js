const fs = require("fs")
let N = Number(fs.readFileSync(0).toString().trim())

console.log(N)
if (N < 0) console.log('minus')