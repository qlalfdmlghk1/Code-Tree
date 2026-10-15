const fs = require("fs")
let string = fs.readFileSync(0).toString().trim()

let [a,b] = ['ee','eb']
let [ans1,ans2] = [0,0]

for (let i = 0; i < string.length - 1; i++) {
    if (string.slice(i,i+2) == a) ans1++;
    if (string.slice(i,i+2) == b) ans2++;
}

console.log(ans1,ans2)