const Person = require("./javascript-classes.js");

let day = "thursday ";
console.log(day.length);
let subDay = day.slice(0, 5);
console.log(subDay);
console.log(day[1]);
// thur   day

let splitDay = day.split("s");
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);

let startDate = "13";
let endDate = "22";

let lengthOfStay = parseInt(endDate) - parseInt(startDate);
console.log(lengthOfStay);
lengthOfStay.toString();

let quoteOfTheDay = day + "is Funday.";
console.log(quoteOfTheDay);
let val = quoteOfTheDay.indexOf("day", 6);
console.log(val);

let value = quoteOfTheDay.indexOf("day");
let count = 0;
while (value !== -1) {
  count++;
  value = quoteOfTheDay.indexOf("day", value + 1);
}
console.log(count);

let person = new Person("John", "Cena");
console.log(person.fullName());
