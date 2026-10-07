const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [sum,cnt] = [0,0];
for (a of arr) {
    if (a >=250) break;
    else {
        sum += a
        cnt += 1
    }
}

console.log(sum, (sum/cnt).toFixed(1))