const fs = require("fs")
let [n,m] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let arr = Array(n).fill(0).map(() => Array(m).fill(0))
let start = 0;

for (let j = 0; j < m; j++) {
    if (j % 2 === 0) {
        for (let i = 0; i < n; i++) {
            arr[i][j] = start;
            start++;
        }
    }
    else  {
        for (let i = n-1; i >= 0; i--) {
            arr[i][j] = start;
            start++;
        }
    }
}

for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < m; j++) {
        row += arr[i][j] + " "
    }
    console.log(row)
}