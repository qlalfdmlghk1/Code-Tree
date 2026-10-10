const fs = require("fs")
let nums = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [cnt,sum]  = [0,0]

for (const num of nums) {
    if (num === 0) break;

    if (num % 2 === 0) {
        cnt += 1;
        sum += num;
    }
}

console.log(cnt, sum)