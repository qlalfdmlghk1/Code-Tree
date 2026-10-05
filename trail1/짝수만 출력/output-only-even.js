const fs = require("fs")
let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let [i,result] = [a,[]]

while (i <= b) {
    if (i % 2 === 0) result.push(i)
    i += 1
}

console.log(result.join(' '))