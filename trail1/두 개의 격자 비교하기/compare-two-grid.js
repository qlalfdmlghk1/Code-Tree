const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let [n,m] = input[0].split(" ").map(Number)
let [arr1,arr2] = [[],[]]
let answer = Array(n).fill(0).map(() => Array(m).fill(0))

for (let i = 0; i < n; i++) {
    arr1.push(input[i+1].split(" ").map(Number))
    arr2.push(input[i+n+1].split(" ").map(Number))
}

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (arr1[i][j] === arr2[i][j]) {
            answer[i][j] = 0
        }
        else {
            answer[i][j] = 1
        }
    }
}

for (let i = 0; i < n; i++) {
    let result = ""
    for (let j = 0; j < m; j++) {
        result += answer[i][j] + " "
    }
    console.log(result)
}