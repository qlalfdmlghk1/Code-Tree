const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let [n,arr] = [input[0],input[1].split(" ").map(Number)]

let countArr = Array(9).fill(0)

for (let i = 0; i < n; i++) {
    countArr[arr[i]-1]++;
}

for (const c of countArr) {
    console.log(c)
}
