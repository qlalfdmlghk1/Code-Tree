const fs = require("fs")
let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let result = []

for (let i = b; i >= a; i--) {
    result.push(i)
}

console.log(result.join(' '))