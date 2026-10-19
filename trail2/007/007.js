const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');
// Please Write your code here.

class Spy {
    constructor(s_code, m_point, time) {
        this.s_code = s_code;
        this.m_point = m_point;
        this.time = time;
    }
}

const s = new Spy(s_code, m_point, time)

console.log(`secret code : ${s.s_code}`)
console.log(`meeting point : ${s.m_point}`)
console.log(`time : ${s.time}`)