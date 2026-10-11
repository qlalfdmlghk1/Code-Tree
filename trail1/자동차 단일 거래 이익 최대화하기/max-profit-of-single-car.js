const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let [n,arr] = [Number(input[0]),input[1].split(" ").map(Number)]

let answer = -Infinity
for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
        if (answer < (arr[j]-arr[i])) answer = (arr[j]-arr[i]);
    }
}

console.log(answer)