const fs = require("fs")
let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let result = []
for (let i = a; i <= b; i += 2) {
    result.push(i)
}

console.log(result.join(' '))