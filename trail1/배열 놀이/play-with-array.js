const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let [n,q] = input[0].split(" ").map(Number)
let nums = input[1].split(" ").map(Number)



for (let i = 2; i < 2+q; i++) {
    let arr = input[i].split(" ").map(Number)
    let answer = ""
    let [a,b] = [arr[0],arr[1]]
    
    if (a === 1) answer = nums[b-1]
    else if (a === 2)  {
        let idx = -1
        for (let j = 0; j < n; j++) {
            if (nums[j] === b) {
                idx = j;
                break;
            }
        }
        if (idx !== -1) answer = idx + 1
        else answer = 0
    }
    else {
        let c = arr[2]
        for (let j = b; j <= c; j++) {
            answer += nums[j-1] + " "
        }
    }
    console.log(answer)
}

