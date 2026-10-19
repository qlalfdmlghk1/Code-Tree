const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

// Please Write your code here.
let nums1 = [...nums.sort((a,b) => a - b)]
let nums2 = [...nums.sort((a,b) => b - a)]

let minSum = -Infinity;
for (let i = 0; i < n; i++) {
    if ((nums1[i] + nums2[i]) > minSum) {
        minSum = nums1[i] + nums2[i];
    }
}

console.log(minSum)