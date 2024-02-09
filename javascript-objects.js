let person = {
  firstName: "Dragan",
  lastName: "Ivanovic",
  age: 28,

  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());
console.log(person.firstName);
console.log(person["lastName"]);

person.firstName = "Marinko";
console.log(person.firstName);

person.gender = "male";
console.log(person);
delete person.gender;
console.log(person);

console.log("gender" in person);

// print all of the values in javascript object
for (let key in person) {
  console.log(person[key]);
}
