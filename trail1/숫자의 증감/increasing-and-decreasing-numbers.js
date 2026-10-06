const fs = require("fs")
let [c,n] = fs.readFileSync(0).toString().trim().split(" ")

let result = []
n = Number(n)
if (c === 'A') {
    for (let i = 1; i <= n; i++) {
       result.push(i)
    }
}
else {
    for (let i = n; i >= 1; i--) {
        result.push(i)
    }
}

console.log(result.join(' '))