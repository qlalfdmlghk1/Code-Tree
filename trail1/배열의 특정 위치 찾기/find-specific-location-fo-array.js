const fs = require("fs")
let nums = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [answer1,answer2] = [0,0]
let cnt2 = 0

for (let i = 1; i < 10; i += 2) {
    answer1 += nums[i]
}

for (let i = 2; i < 10; i += 3) {
    answer2 += nums[i]
    cnt2 += 1
}

console.log(answer1,(answer2/cnt2).toFixed(1))