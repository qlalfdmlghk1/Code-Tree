const fs = require("fs")
let [h,w] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

const b = parseInt((10000 * w) / h**2)

console.log(b)
if (b >= 25) console.log("Obesity")