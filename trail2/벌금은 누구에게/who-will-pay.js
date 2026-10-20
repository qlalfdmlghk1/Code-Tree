const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

// Please Write your code here.
let student = Array(n+1).fill(0);

let answer = -1;
for (let pp of penalizedPersons) {
    if (++student[pp] >= k) {
        answer = pp;
        break
    }
}

console.log(answer)