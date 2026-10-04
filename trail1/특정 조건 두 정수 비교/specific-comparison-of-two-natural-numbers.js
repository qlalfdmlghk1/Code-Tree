const fs = require("fs")
let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let resultA, resultB;

if (a < b) resultA = 1;
else resultA = 0;

if (a === b) resultB = 1;
else resultB = 0;

console.log(resultA,resultB)