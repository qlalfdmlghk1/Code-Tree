const fs = require("fs")
let [student1,student2] = fs.readFileSync(0).toString().split("\n")
let [math1,english1] = student1.split(" ").map(Number)
let [math2,english2] = student2.split(" ").map(Number)

if (math1 > math2) {
    console.log('A')
}
else if (math1 < math2) {
    console.log('B')
}
else {
    if (english1 > english2) console.log('A')
    else console.log('B')
}