const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let [n1,n2] = input[0].split(" ").map(Number)
let [arr1,arr2] = [input[1].split(" ").map(Number),input[2].split(" ").map(Number)]

let start = arr2[0]
let answer = "No"

for (let i = 0; i < n1; i++) {
    if (start === arr1[i]) {        
        for (let j = 0; j < n2; j++) {
            if (arr2[j] !== arr1[i+j]) break;
            if (j === n2-1) answer = "Yes";
        }
    }
}

console.log(answer)