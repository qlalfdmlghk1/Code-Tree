const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ").map(Number)

let countArr = Array(10).fill(0)

for (const a of arr) {
    if (a === 0) break;
    countArr[parseInt(a / 10)]++;
}

for (let i = 1; i < 10; i++) {
    console.log(`${i} - ${countArr[i]}`)
}