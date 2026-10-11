const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [maxVal,minVal] = [-Infinity,Infinity]

for (let a  of arr) {
    if (a < 500 && a > maxVal) {
        maxVal = a
    }
    if (a > 500 && minVal > a) {
        minVal = a
    }
}

console.log(maxVal,minVal)