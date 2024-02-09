// var marks = Array(6);
// var marks = new Array(20, 34, 58, 75, 86, 100);

let marks = [20, 34, 58, 75, 86, 100];
console.log(marks[2]);
marks[3] = 78;
console.log(marks);
console.log(marks.length);
let subMarks = marks.slice(2, 5);
console.log(subMarks);
marks.push(69); // adds element at the end of an array
console.log(marks);
marks.pop(); // removes element from the end of an array
console.log(marks);
marks.unshift(15); // adds element at the beginning of an array
console.log(marks);
marks.shift(); // removes first element from the array
console.log(marks);
console.log(marks.indexOf(86));
console.log(marks.includes(150));
let i;
let sum = 0;
for (i = 0; i < marks.length; i++) {
  sum += marks[i];
}
console.log(sum);
// reduce filter map
let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total);
// create new array with even numbers of scores array [18,23,28,33,38]
let scores = [18, 23, 28, 33, 38];
let evenScores = [];

for (i = 0; i < scores.length; i++) {
  if (scores[i] % 2 == 0) {
    evenScores.push(scores[i]);
  }
}
console.log(evenScores);

let newFilterEvenScores = scores.filter((score) => score % 2 == 0);
console.log(newFilterEvenScores);
// create new array with even numbers of scores array and multiply each value with 3 and sum them
let mappedArray = newFilterEvenScores.map((score) => score * 3);
console.log(mappedArray);
let totalValue = mappedArray.reduce((sum, val) => sum + val, 0);
console.log(totalValue);

let scores1 = [10, 15, 20, 25, 30];
scores1
  .filter((score) => score % 2 == 0)
  .map((score) => score * 3)
  .reduce((sum, val) => sum + val, 0);

let fruits = ["banana", "apple", "mango", "orange"];
console.log(fruits.sort());
console.log(fruits.reverse());

let numbers = [11, 18, 30, 5, 10];
// console.log(numbers.sort());
// numbers.sort(function (a, b) {
//   return a - b;
// });

console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));
