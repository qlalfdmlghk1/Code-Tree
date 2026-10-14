const fs = require("fs")
let word = fs.readFileSync(0).toString().trim()

let answer = ""

if (word.includes('ee')) answer += 'Yes '
else answer += 'No '

if (word.includes('ab')) answer += 'Yes'
else answer += 'No'

console.log(answer)

