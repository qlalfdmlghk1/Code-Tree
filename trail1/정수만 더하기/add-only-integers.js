const fs = require("fs")
let str = fs.readFileSync(0).toString().trim()

let answer = 0;

for (let s of str) {
    if (s >= '0' && s <= '9') answer += Number(s)
}

console.log(answer)