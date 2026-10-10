const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let [n,m] = input[0].split(" ")
let arr = input[1].split(" ").map(Number)

let cnt = 0;

for (const a of arr) {
    if (a == m) cnt++;
}

console.log(cnt)