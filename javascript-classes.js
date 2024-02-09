module.exports = class Person {
  age = 25;

  //   location = "Germany";
  get location() {
    return "Germany";
  }

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    console.log(this.firstName + " " + this.lastName);
  }
};

// let person = new Person("Tom", "Jones");
// console.log(person);
// console.log(person.age);
// console.log(person.location);
// console.log(person.fullName());
