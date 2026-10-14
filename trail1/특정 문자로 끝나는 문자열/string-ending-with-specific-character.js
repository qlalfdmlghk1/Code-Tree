const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split("\n")
let alpha = arr.pop()
let cnt = 0;

for (const a of arr) {
  if (a[a.length-1] === alpha) {
    cnt++;
    console.log(a)
  }
}

if (cnt === 0) console.log('None')