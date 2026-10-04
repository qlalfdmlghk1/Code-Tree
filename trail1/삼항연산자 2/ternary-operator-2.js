const fs = require("fs")
let a = Number(fs.readFileSync(0).toString().trim())

a === 1 ? console.log("t") : console.log("f");