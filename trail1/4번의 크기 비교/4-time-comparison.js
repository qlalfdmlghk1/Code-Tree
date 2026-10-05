const fs = require("fs")
let [a,nums] = fs.readFileSync(0).toString().split("\n")
a = Number(a)

let[b,c,d,e] = nums.split(" ").map(Number)

a > b ? console.log(1) : console.log(0);
a > c ? console.log(1) : console.log(0);
a > d ? console.log(1) : console.log(0);
a > e ? console.log(1) : console.log(0);