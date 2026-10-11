const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let [n,arr] = [input[0],input[1].split(" ").map(Number)]

let [firstMax,secondMax] = [-Infinity,-Infinity]

for (let a of arr) {
    if (a > firstMax) {
        if (firstMax > secondMax) secondMax = firstMax;
        firstMax = a;
    }
    else {
        if (a > secondMax) secondMax = a;
    }
}

console.log(firstMax,secondMax)