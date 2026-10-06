const fs = require("fs")
let a = Number(fs.readFileSync(0).toString().trim())

let i = a;
let result = [];

while (i >= 1) {
    result.push(i)
    i -= 1
}

console.log(result.join(' '))