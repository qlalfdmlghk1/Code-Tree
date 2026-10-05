const fs = require("fs")
let n = Number(fs.readFileSync(0).toString().trim())

let result = [];

for (let i = n; i <= n * 5; i += n) {
    result.push(i)
}

console.log(result.join(' '))