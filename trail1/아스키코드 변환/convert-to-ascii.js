const fs = require("fs")
let [str,num] = fs.readFileSync(0).toString().split(" ")

num = Number(num);


console.log(str.charCodeAt(0), String.fromCharCode(num))