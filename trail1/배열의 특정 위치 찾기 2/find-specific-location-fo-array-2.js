const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ").map(Number)

let [odd,even] = [0,0]

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) odd += arr[i]
    else even += arr[i]
}

console.log(Math.abs(odd-even))