const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let [n,arr] = [Number(input[0]),input[1].trim().split(" ")]

let string = arr.join('')
let row = ""

for (let i = 0; i < string.length; i++) {
    if (i > 0 && i % 5 === 0) {
        console.log(row)
        row = string[i]
    }
    else {
        row += string[i]
        
    }
}

console.log(row)
