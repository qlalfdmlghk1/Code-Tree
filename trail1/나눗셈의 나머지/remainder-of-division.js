const fs = require("fs")
let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let countArr = Array(b).fill(0);
let answer = 0;

while (a > 1) {
    countArr[a % b]++
    a = parseInt(a / b)
}

for (const c of countArr) {
    answer += c ** 2
}

console.log(answer)