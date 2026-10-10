const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let countArr = Array(4).fill(0)
let answer = ""

for (let i = 0; i < 3; i++) {
    let [symtom,temp] = input[i].split(" ")
    if (symtom == 'Y' && temp >= 37) countArr[0]++;
    else if (symtom == 'N' && temp >= 37) countArr[1]++;
    else if (symtom == 'Y' && temp < 37) countArr[2]++;
    else countArr[3]++;
}

for (const c of countArr) {
    answer += c + " "
}

if (countArr[0] >= 2) answer += 'E'

console.log(answer)