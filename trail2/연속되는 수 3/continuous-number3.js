const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(Number);

// Please Write your code here.
let [cnt,maxCnt] = [0,0]

for (let i = 0; i < n; i++) {
    if (i == 0 || (arr[i] * arr[i-1]) > 0) cnt++;
    else cnt = 1;

    if (maxCnt < cnt) maxCnt = cnt;
}

console.log(maxCnt)