const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.
function is3Num(n) {
    if (n % 3 === 0) return true;
    else return false;
}

function has369(n) {
    if (String(n).includes('3') || String(n).includes('6') || String(n).includes('9')) return true;
    else return false;
}

let cnt = 0;

for (let i = A; i <= B; i++) {
    if (is3Num(i) || has369(i)) cnt++;
}

console.log(cnt)