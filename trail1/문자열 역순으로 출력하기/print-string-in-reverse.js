const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split("\n")

for (const a of arr.reverse()) {
  console.log(a)
}