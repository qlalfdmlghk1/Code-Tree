const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split("\n")

for (let a of arr) {
    if (a === 'END') break;
    else {
        console.log([...a].reverse().join(''))
    }
}
