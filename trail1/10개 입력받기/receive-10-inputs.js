const fs = require("fs")
let nums = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [sum, cnt] = [0,0]

for (const num of nums) {
    if (num === 0) break;
    sum += num
    cnt += 1
}

console.log(sum, (sum/cnt).toFixed(1))