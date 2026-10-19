const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

// Please Write your code here.
class Player{
    constructor(id = 'codetree',level = 10) {
    this.id = id;
    this.level = level;}
}

let p1 = new Player()
let p2 = new Player(user_id,levelStr)

console.log(`user ${p1.id} lv ${p1.level}`)
console.log(`user ${p2.id} lv ${p2.level}`)