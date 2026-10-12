const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let arr = [];
let answer = 0;

for (let i = 0; i < 4; i++) {
    arr.push(input[i].split(" ").map(Number))
}

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
        if (i >= j) answer += arr[i][j]
    }
}

console.log(answer)