const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let [n,arr] = [input[0],input[1].split(" ").map(Number)]

arr.sort((a,b) => b - a)

console.log(arr[0],arr[1])