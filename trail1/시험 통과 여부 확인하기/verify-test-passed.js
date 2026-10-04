const fs = require("fs")
let N = Number(fs.readFileSync(0).toString().trim())

if (N >= 80) console.log("pass")
else console.log(`${80-N} more score`)