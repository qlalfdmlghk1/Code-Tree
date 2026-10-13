const fs = require("fs")
let n = Number(fs.readFileSync(0).toString().trim())

let arr = Array(n).fill(0).map(() => Array(n).fill(0))

let num = 1;

for (let j = n-1; j >=0; j--)  {
    if ((n-1-j) % 2 === 0) {
        for (let i = n-1; i >=0; i--) {
            arr[i][j] = num;
            num++;
        }
    }
    else {
        for (let i = 0; i < n; i++) {
            arr[i][j] = num;
            num++;
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