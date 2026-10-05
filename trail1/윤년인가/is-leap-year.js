const fs = require("fs")
let y = Number(fs.readFileSync(0).toString().trim())

let answer = 'true'

if (y % 4 === 0) {
    if (y % 100 === 0 && y % 400 !== 0) answer = 'false'
}
else answer = 'false'

console.log(answer)