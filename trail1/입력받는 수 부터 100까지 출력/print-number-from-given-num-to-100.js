const fs = require("fs")
let n = Number(fs.readFileSync(0).toString().trim())
let answer = []

for (let i=n; i <= 100; i++) {
    answer.push(i)
}

console.log(answer.join(' '))