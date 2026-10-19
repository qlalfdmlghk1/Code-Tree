const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const a = input[1].trim().split(' ').map(Number);
const b = input[2].trim().split(' ').map(Number);

// Please Write your code here.
a.sort((a,b) => a - b)
b.sort((a,b) => a - b)

let answer = "Yes"
for (let i = 0; i < n; i++) {
    if (a[i] === b[i]) continue;
    else answer = "No"
}

console.log(answer)