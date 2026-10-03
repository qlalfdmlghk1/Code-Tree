const fs = require("fs")
let [weight, height] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

weight += 8
height *= 3

console.log(weight)
console.log(height)
console.log(weight * height)
