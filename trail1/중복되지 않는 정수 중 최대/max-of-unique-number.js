const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let [n,arr] = [Number(input[0]),input[1].split(" ").map(Number)]

arr.sort((a,b) => b-a)

let maxVal = -1

for (let i = 0; i < n; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
        if (arr[i] === arr[j]) {
            cnt++;
        }
    }
    if (cnt === 1) {
        maxVal = arr[i];
        break;
    }
}

console.log(maxVal)