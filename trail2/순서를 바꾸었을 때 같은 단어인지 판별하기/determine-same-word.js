const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const str1 = input[0];
const str2 = input[1];

// Please Write your code here.
let s1 = [...str1].sort().join('')
let s2 = [...str2].sort().join('')

if (s1 === s2) console.log("Yes")
else console.log("No")