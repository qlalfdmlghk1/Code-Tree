const fs = require("fs")
let n = Number(fs.readFileSync(0).toString().trim())

let arr = Array(n).fill(0).map(() => Array(n).fill(0))

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i === 0 || j === 0) arr[i][j] = 1;
        else {
            arr[i][j] = arr[i-1][j] + arr[i][j-1] + arr[i-1][j-1]
        }
    }
} 

for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < n; j++) {
        row += arr[i][j] + " "
    }
    console.log(row)
}