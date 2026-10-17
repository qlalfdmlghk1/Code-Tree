const fs = require("fs")
let str = fs.readFileSync(0).toString().trim()

let answer = ""

for (let s of str) {
    if ((s >= 'A' && s <= 'Z') || (s >= 'a' && s <= 'z')) answer += s.toLowerCase()
    else if (Number(s) >= 0 && Number(s) <= 9) answer += s
}

console.log(answer)