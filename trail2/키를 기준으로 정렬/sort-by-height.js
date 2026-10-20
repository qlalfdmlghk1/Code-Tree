const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const studentsInput = [];
for (let i = 1; i <= n; i++) {
    studentsInput.push(input[i].split(' '));
}
// Please Write your code here.
class Student {
    constructor(name,height,weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

let students = []
for (let student of studentsInput) {
  students.push(new Student(student[0],student[1],student[2]))
}

students.sort((a,b) => a.height - b.height)

for (let student of students) {
  console.log(student.name, student.height, student.weight)
}