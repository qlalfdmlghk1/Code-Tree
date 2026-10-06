const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let answer = 0;
for (a of arr) {
    answer += a
}

console.log(answer)