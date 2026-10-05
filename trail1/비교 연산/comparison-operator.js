const fs = require("fs")
let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

a >= b ? console.log(1) : console.log(0)
a > b ? console.log(1) : console.log(0)
a <= b ? console.log(1) : console.log(0)
a < b ? console.log(1) : console.log(0)
a === b ? console.log(1) : console.log(0)
a !== b ? console.log(1) : console.log(0)