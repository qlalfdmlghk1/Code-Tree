const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

// Please Write your code here.
function findNumber(a,b) {
    let num = Math.max(a,b)
    while (true) {
        if (num % a === 0 && num % b === 0) {
            console.log(num);
            break
        }
        num++;
    }
}

findNumber(n,m)