const fs = require("fs")
let month = fs.readFileSync(0).toString().trim()

if (12 == month || month <= 2) {
    console.log('Winter')
}
else if (month <= 5) {
    console.log('Spring')
}
else if (month <= 8) {
    console.log('Summer')
} 
else {
    console.log('Fall')
}