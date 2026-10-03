const fs = require("fs")
let arr = fs.readFileSync(0).toString().split("\n")
let arr2 = arr[0].split(" ")
let [a,b,c] = [arr2[0],arr2[1],arr[1]]

console.log(a,b,c)