const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let n = Number(input[0])
let nums = input[1].split(" ").map(Number)

let [result,answer] = [[],[]]

for (const num of nums) {
    if (num % 2 === 0) {
        result.push(num)
    }
}

while (result.length > 0) {
    answer.push(result.pop())
}

console.log(answer.join(' '))
