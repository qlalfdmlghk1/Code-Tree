const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let [n,m] = input[0].split(" ").map(Number)
let arr = Array(n).fill(0).map(() => Array(n).fill(0))

for (let i = 1; i < m+1; i++) {
  let [a,b] = input[i].split(" ").map(Number)
  arr[a-1][b-1] = a * b
}

for (let i = 0; i < n; i++) {
  let row = ""
  for (let j = 0; j < n; j++) {
    row += arr[i][j] + " "
  }
  console.log(row)
}