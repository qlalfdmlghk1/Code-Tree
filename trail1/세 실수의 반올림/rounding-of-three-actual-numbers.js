const fs = require("fs")
let arr = fs.readFileSync(0).toString().split("\n")
let [a,b,c] = [Number(arr[0]),Number(arr[1]),Number(arr[2])]

console.log(a.toFixed(3))
console.log(b.toFixed(3))
console.log(c.toFixed(3))