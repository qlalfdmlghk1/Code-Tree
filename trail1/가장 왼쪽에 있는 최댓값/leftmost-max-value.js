const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let [n,arr] = [Number(input[0]),input[1].split(" ").map(Number)]

let preMaxIdx = n;
let answer = ""

while (true) {
    let maxIdx = 0;

    for (let i = 0; i < preMaxIdx; i++) {
        if (arr[i] > arr[maxIdx])  {
            maxIdx = i;
        }
    }

    answer += `${maxIdx + 1} `

    if (maxIdx == 0) break;

    preMaxIdx = maxIdx;
}

console.log(answer)