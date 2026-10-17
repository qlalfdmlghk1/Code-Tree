const fs = require("fs")
let [num1,num2] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let num = (num1 + num2).toString()
let answer = 0

for (let n of num) {
    if (n === '1') answer += 1
}

console.log(answer)