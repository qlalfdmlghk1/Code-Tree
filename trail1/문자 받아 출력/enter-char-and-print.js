const fs = require("fs")
let word = fs.readFileSync(0).toString().trim()
console.log(word)
