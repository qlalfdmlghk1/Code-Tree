const fs = require("fs")
let scores = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let sum = 0

for (score of scores) {
    sum += score
}

console.log((sum / 8).toFixed(1))