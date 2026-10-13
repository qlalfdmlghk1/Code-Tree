const fs = require("fs")
let n = Number(fs.readFileSync(0).toString().trim())

let arr = Array(n).fill(0).map(() => Array(n).fill(0))

let num = 1;

for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
        arr[i][j] = num;
        num++;
    }
}

for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < n; j++) {
        row += arr[i][j] + " "
    }
    console.log(row)
}