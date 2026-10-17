const fs = require("fs")
let str = fs.readFileSync(0).toString().trim()

let answer = ""

for (let s of str) {
    if (s >= 'a' && s <= 'z') answer += s.toUpperCase()
    else if (s >= 'A' && s <= 'Z') answer += s.toLowerCase()
}

console.log(answer)