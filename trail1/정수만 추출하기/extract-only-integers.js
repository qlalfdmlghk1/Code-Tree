const fs = require("fs")
let [str1,str2] = fs.readFileSync(0).toString().trim().split(" ")

let [num1,num2] = ["",""]

for (let s of str1) {
    if (s >= '0' && s <= '9') num1 += s
    else break;
}

for (let s of str2) {
    if (s >= '0' && s <= '9') num2 += s
    else break;
}

console.log(Number(num1) + Number(num2))