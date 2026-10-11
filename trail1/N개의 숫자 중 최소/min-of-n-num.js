const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let n = input[0]
let arr = input[1].split(" ").map(Number)

let [minVal,cnt] = [Math.min(...arr),0]

for (let a of arr) {
    if (a === minVal) cnt++;
}

console.log(minVal,cnt)