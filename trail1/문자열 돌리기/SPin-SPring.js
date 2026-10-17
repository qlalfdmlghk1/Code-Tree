const fs = require("fs")
let str = fs.readFileSync(0).toString().trim()

for (let i = 0; i <= str.length; i++) {
    console.log(str.slice(str.length-i) + str.slice(0,str.length-i))
}