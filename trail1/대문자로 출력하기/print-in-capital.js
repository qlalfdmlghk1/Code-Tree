const fs = require("fs")
let str = fs.readFileSync(0).toString().trim()

let answer = ""

for (let s of str) {
    if ((s >= 'A' && s <= 'Z') || (s >= 'a' && s <= 'z')) answer += s.toUpperCase()
}

console.log(answer)