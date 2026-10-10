const fs = require("fs")
let input = fs.readFileSync(0).toString().split("\n")

let [n,arr] = [input[0],input[1].split(" ").map(Number)]

for (let i = 0; i < n; i++) {
    arr[i] = arr[i] ** 2
}

console.log(arr.join(' '))