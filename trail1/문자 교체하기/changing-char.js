const fs = require("fs")
let [word1,word2] = fs.readFileSync(0).toString().trim().split(" ")

console.log(word1.slice(0,2) + word2.slice(2))