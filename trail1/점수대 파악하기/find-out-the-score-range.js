const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let countArr = Array(11).fill(0)

for (const a of arr) {
    if (a === 0) break;
    countArr[parseInt(a / 10)]++;
}

for (let i = 10; i > 0; i--) {
    console.log(`${i * 10} - ${countArr[i]}`)
}