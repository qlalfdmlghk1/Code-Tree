const fs = require("fs")
let [str,cmd] = fs.readFileSync(0).toString().trim().split("\n")

for (let c of cmd) {
    if (c === 'L') str = str.slice(1) + str.slice(0,1);
    else str =  str.slice(-1) + str.slice(0,-1)
}

console.log(str)