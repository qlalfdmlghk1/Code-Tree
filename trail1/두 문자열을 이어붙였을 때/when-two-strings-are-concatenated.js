const fs = require("fs")
let [a,b] = fs.readFileSync(0).toString().trim().split("\n")

if (a+b === b+a) console.log("true")
else console.log("false")