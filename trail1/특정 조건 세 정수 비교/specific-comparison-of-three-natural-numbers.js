const fs = require("fs")
let [a,b,c] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

const minNum = Math.min(a,b,c)
let [firstA,secondA] = [0,0];

if (a === minNum) firstA = 1

if (a === b && b === c) secondA = 1;

console.log(firstA,secondA)