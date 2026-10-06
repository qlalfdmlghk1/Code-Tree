const fs = require("fs")
let [a,b] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

if (a <= 0) {
    console.log(0)
}
else {
    let answer = ""
    for (let i = 0; i < b; i++) {
        answer += a
    }
    console.log(answer)
}