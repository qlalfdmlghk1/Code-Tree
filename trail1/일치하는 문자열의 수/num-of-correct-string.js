const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let [n,str] =  input[0].split(" ")
let cnt = 0

for (let i = 1; i < Number(n)+1; i++) {
    if (str === input[i]) cnt++;
}

console.log(cnt)