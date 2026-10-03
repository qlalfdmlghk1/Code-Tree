const fs = require("fs")
let arr = fs.readFileSync(0).toString().split(" ")
let [a,b] = [arr[0].trim(),arr[1].trim()];
[a,b] = [b,a];
console.log(a,b)
