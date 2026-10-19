const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

// Please Write your code here.
class User {
    constructor(id = 'codetree',level = 10) {
        this.id = id;
        this.level = level;
    }
}

const u1 = new User()
const u2 = new User(user_id,level)

console.log(`user ${u1.id} lv ${u1.level}`)
console.log(`user ${u2.id} lv ${u2.level}`)