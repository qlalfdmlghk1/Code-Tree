const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
const studentData = input.map(line => line.split(' '));

// Please write your code here.
class Student {
  constructor(name,score1,score2,score3) {
    this.name = name;
    this.score1 = score1;
    this.score2 = score2;
    this.score3 = score3;
  }
}

let students = []

for (let sData of studentData) {
  students.push(new Student(sData[0],Number(sData[1]),Number(sData[2]),Number(sData[3])))
}

students.sort((a,b) => (a.score1+a.score2+a.score3) - (b.score1+b.score2+b.score3))

for (let student of students) {
  console.log(student.name, student.score1, student.score2, student.score3)
}