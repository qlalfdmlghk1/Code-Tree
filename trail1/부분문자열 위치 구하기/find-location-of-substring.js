const fs = require("fs")
let [str1,str2] = fs.readFileSync(0).toString().trim().split("\n")

let answer = str1.indexOf(str2)

console.log(answer)