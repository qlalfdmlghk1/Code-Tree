const fs = require("fs")
let [string,word] = fs.readFileSync(0).toString().trim().split(" ")

let s = string.indexOf(word)

if (s === -1) console.log('No')
else console.log(s)