const fs = require("fs")
let [n,arr] = fs.readFileSync(0).toString().trim().split("\n")
n = Number(n)
arr = arr.split(" ").map(Number)

let sum = 0;
for (a of arr) {
    sum += a
}

let avg = (sum / n).toFixed(1)
console.log(avg)

if (avg >= 4.0) {
    console.log('Perfect')
}
else if (avg >= 3.0) {
    console.log('Good')
}
else {
    console.log('Poor')
}