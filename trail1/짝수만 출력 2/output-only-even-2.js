const fs = require("fs")
let [b,a] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let i = b;
let result = [];

while (i >= a) {
    if (i % 2 === 0) {
        result.push(i)
    }
    i -= 1
}

console.log(result.join(' '))