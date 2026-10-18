const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
// Please Write your code here.
function checkNum(n) {
    let num = parseInt(n/10) + (n % 10)
    if (n % 2 === 0 && num % 5 === 0) return "Yes";
    else return "No";
}

console.log(checkNum(n))