const fs = require("fs")
let alpha = fs.readFileSync(0).toString().trim()

let arr = ["apple", "banana", "grape", "blueberry", "orange"];
let cnt = 0;

for (let a of arr) {
  if (a[2] === alpha || a[3] === alpha) {
    console.log(a);
    cnt++;
  }
}
console.log(cnt)