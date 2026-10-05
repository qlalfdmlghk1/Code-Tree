const fs = require("fs")
let [b,a] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let result = []
for (let i = b; i >= a; i--) {
    if (i % 2 !== 0) result.push(i)
}

console.log(result.join(' '))