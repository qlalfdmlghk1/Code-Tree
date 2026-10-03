const fs = require("fs")
let num = fs.readFileSync(0).toString().trim().split("-")
console.log(num[0]+num[1])