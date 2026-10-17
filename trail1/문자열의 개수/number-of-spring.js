const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split("\n")

let [cnt,answer] = [0,[]]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '0') break;
    else {
        cnt++;
        if (i % 2 === 0) answer.push(arr[i])
    }
}

console.log(cnt)

for (let a of answer) {
    console.log(a)
}