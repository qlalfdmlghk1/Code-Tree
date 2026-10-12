const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let arr = [];

for (let i = 0; i < 5; i++) {
    arr.push(input[i].split(" "))
}

for (let i = 0; i < 5; i++) {
    let answer = ""
    for (let j = 0; j < 3; j++) {
        answer += arr[i][j].toUpperCase() + " "
    }
    console.log(answer)
}