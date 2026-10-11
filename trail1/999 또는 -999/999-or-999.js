const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [maxVal,minVal] = [-Infinity,Infinity]

for (let a of arr) {
    if (a === 999 || a === -999) break;
    
    if (a > maxVal) maxVal = a;
    if (minVal > a) minVal = a;
}

console.log(maxVal,minVal)