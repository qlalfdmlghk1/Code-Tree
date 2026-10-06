const fs = require("fs")
let [a, b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let answer = ""
answer += parseInt(a / b)
answer += '.'
a -= parseInt(a / b) * b
for (let i = 0; i < 20; i++) {
    a *= 10
    answer += parseInt(a / b)
    a -= parseInt(a / b) * b
}
console.log(answer)