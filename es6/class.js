class Student {
  constructor(sId, sName) {
    this.id = sId;
    this.name = sName;
    this.school = 'Moytha Janata High School';
  }
}

const student1 = new Student(1, 'joney talukdar');
const student2 = new Student(12, 'jerry talukdar');
const student3 = new Student(22, 'jeubayer talaukdar');

console.log(student1.name);
console.log(student2.school);
console.log(student1, student2);
console.log(student3);
