const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let std = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        std = i;
        break;
    }
}

console.log(arr[std-1] + arr[std-2] + arr[std-3])