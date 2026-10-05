const fs = require("fs")
let [midTerm,endTerm] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let answer = 0

if (midTerm >= 90) {
    if (endTerm >= 95) answer = 100000;
    else if (endTerm >= 90) answer = 50000;
}

console.log(answer)