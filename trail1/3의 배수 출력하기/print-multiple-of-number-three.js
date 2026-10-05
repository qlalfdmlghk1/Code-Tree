const fs = require("fs")
let n = Number(fs.readFileSync(0).toString().trim())
let [i,result] = [1,[]]

while (i <= n) {
    if (i % 3 === 0) {
        result.push(i)
    }
    i += 1
}

console.log(result.join(' '))