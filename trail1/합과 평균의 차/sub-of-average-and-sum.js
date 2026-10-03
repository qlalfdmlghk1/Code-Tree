const fs = require("fs")
let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ").map(Number)
sum = a+b+c
avg = (a+b+c) / 3
console.log(sum)
console.log(avg)
console.log(sum-avg)