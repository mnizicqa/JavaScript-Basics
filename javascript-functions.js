function add(a, b) {
  return a + b;
}

let sum = add(5, 8);
console.log(sum);

// Anonymous functions - do not have a name
let sumOfIntegers = function (c, d) {
  return c + d;
};
console.log(sumOfIntegers(5, 8));

//Arrow functions - shorthand for the traditional function declaration

let sumOfNumbers = (c, d) => c + d;

console.log(sumOfNumbers(8, 13));
