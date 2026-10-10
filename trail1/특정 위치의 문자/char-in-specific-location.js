const fs = require("fs")
let word = fs.readFileSync(0).toString().trim()

let wordArr = ["L", "E", "B", "R", "O", "S"]
let idx = -1

for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] == word) {
        idx = i;
        break;
    }
}

if (idx !== -1) console.log(idx)
else console.log('None')