const fs = require("fs")
let word = fs.readFileSync(0).toString().trim()

let answer = ""
for (let i = 0; i < 8; i++) {
    answer += word
}

console.log(answer)