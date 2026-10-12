const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let arr = []
let [answer1,answer2,answer3] = ["","",0]

for (let i = 0; i < 2; i++) {
    arr.push(input[i].split(" ").map(Number))
}

for (let i = 0; i < 2; i++) {
    let sum1 = 0;
    for (let j = 0; j < 4; j++) {
        sum1 += arr[i][j]
        answer3 += arr[i][j]
    }
    answer1 += (sum1 / 4).toFixed(1) + " "
}

for (let j = 0; j < 4; j++) {
    let sum2 = 0;
    for (let i = 0; i < 2; i++) {
        sum2 += arr[i][j]
    }
    answer2 += (sum2 / 2).toFixed(1) + " "
}

answer3 = (answer3/8).toFixed(1)

console.log(answer1)
console.log(answer2)
console.log(answer3)