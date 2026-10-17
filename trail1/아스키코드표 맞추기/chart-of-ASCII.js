const fs = require("fs")
let nums = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let answer = ""

for (let num of nums) {
    answer += String.fromCharCode(num) + " "
}

console.log(answer)