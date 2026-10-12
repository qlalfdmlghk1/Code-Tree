const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let [arr1,arr2] =[[],[]]

for (let i = 0; i < 3; i++) {
    arr1.push(input[i].split(" ").map(Number))
    arr2.push(input[i+4].split(" ").map(Number))
}

let answer = Array(3).fill(0).map(() => Array(3).fill(0))

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        answer[i][j] = arr1[i][j] * arr2[i][j]
    }
}

for (let i = 0; i < 3; i++) {
    let row = ""
    for (let j = 0; j < 3; j++) {
        row += answer[i][j] + " "
    }
    console.log(row)
}