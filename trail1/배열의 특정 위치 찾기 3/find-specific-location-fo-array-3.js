const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let std = 0;

for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === 0) std = i;
}

console.log(arr[std-1] + arr[std-2] + arr[std-3])