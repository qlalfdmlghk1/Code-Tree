const fs = require("fs")
let [str1,str2] = fs.readFileSync(0).toString().trim().split("\n")

let answer = 0;

for (let i = 0; i < str1.length-1; i++) {
    if (str1.slice(i,i+2) === str2) answer++;
}

console.log(answer)