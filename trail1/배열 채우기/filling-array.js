const fs = require("fs")
let nums = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let [arr,answer] = [[],[]];

for (const num of nums) {
    if (num === 0) {
        break;
    }
    arr.push(num)
}

while (arr.length > 0) {
    answer.push(arr.pop())
}

console.log(answer.join(" "))