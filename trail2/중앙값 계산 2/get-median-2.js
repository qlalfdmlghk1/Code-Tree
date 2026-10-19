const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let answer = ""

for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
        answer += arr.slice(0,i+1).sort((a,b) => a - b)[i/2] + " "
    }
}

console.log(answer)