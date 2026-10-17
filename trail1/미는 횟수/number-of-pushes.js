const fs = require("fs")
let [str1,str2] = fs.readFileSync(0).toString().trim().split("\n")

let answer = -1
for (let i = 0; i < str1.length; i++) {
    if (str2 === (str1.slice(-i-1) + str1.slice(0,-i-1))) {
        answer = i+1;
        break;
    }
}

console.log(answer)