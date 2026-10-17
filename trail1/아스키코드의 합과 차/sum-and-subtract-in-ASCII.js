const fs = require("fs")
let [word1,word2] = fs.readFileSync(0).toString().trim().split(" ")

let [a1,a2] = [word1.charCodeAt(0)+word2.charCodeAt(0),Math.abs(word1.charCodeAt(0)-word2.charCodeAt(0))]

console.log(a1,a2)
