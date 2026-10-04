const fs = require("fs")
let score = Number(fs.readFileSync(0).toString().trim())

score === 100 ? console.log("pass") : console.log("failure");