const fs = require("fs")
let [n,m] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let arr = Array(n).fill(0).map(() => Array(m).fill(0))

let [sum,start] = [0,1];

while (sum <= n+m-2) {
    for (let i = 0; i <= sum; i++) {
        j  = sum - i;
        if (i >= n || j >= m) continue;
        arr[i][j] = start;
        start++;
    }
    sum += 1;
}

for (let i = 0; i < n; i++) {
    let row = ""
    for (let j = 0; j < m; j++) {
        row += arr[i][j] + " "
    }
    console.log(row)
}