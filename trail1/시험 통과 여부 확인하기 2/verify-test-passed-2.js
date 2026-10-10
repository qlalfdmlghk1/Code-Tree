const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")
let n = input[0]

let cnt = 0;

for (let i = 1; i <= n; i++) {
    let scores = input[i].split(" ").map(Number)
    let sum = 0;

    for (let j = 0; j < 4; j++) {
        sum += scores[j]
    }

    let avg = sum / 4

    if (avg >= 60) {
        console.log("pass")
        cnt += 1
    }
    else console.log("fail")
}


console.log(cnt)