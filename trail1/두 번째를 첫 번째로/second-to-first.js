const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split('')

let [first,second] = [arr[0],arr[1]]

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === second) arr[i] = first;
}

console.log(arr.join(''))