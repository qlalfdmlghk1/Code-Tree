const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const studentInputs = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(' ').map(Number);
    studentInputs.push([height, weight]);
}

// Please Write your code here.
class Student {
    constructor(height,weight,num) {
        this.height = height;
        this.weight = weight;
        this.num = num;
    }
}

let students = []

for (let i = 0; i < n; i++) {
    students.push(new Student(studentInputs[i][0],studentInputs[i][1],i+1))
}

students.sort((a,b) => a.height - b.height || b.weight - a.weight)

for (let student of students) {
    console.log(student.height,student.weight,student.num)
}