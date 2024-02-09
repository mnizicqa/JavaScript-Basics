const Person = require("./javascript-classes.js");
class Professor extends Person {
  age = 50;
  constructor(firstName, lastName, schoolSubject, school) {
    super(firstName, lastName);
    this.schoolSubject = schoolSubject;
    this.school = school;
  }
}

let professor = new Professor(
  "Baltazar",
  "Baltazarevic",
  "Hemija",
  "Prva Gimnazija"
);
console.log(professor);
console.log(professor.fullName());
