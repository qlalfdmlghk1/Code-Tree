const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ")

let answer = ""

for (let i = 9; i >=0; i--) {
    answer += arr[i]
}

console.log(answer)