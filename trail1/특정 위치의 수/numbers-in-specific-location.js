const fs = require("fs")
let nums = fs.readFileSync(0).toString().trim().split(" ").map(Number)

console.log(nums[2] + nums[4] + nums[9])