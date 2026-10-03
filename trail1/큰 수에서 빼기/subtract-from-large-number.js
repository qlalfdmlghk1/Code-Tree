const fs = require("fs")
let [A,B] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

if (A > B) {
    console.log(A-B)
}
else {
    console.log(B-A)
}