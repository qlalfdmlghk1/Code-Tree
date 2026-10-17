const fs = require("fs")
let num = fs.readFileSync(0).toString().trim()

let answer = 0

for (let n of num) {
    answer += Number(n)
}

console.log(answer)