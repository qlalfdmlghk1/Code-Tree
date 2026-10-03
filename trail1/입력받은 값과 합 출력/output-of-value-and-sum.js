const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ")
let [A,B] = [Number(arr[0]),Number(arr[1])]

console.log(A,B,A+B)