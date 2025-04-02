let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map function

let arrOfSquare = arr.map((sum) => sum * 2);
console.log(arrOfSquare);

// Filter function

let findEvenNumber = arr.filter((sum) => sum % 2 === 0);
console.log(findEvenNumber);

// Reduce function
let sumOfArrays = arr.reduce((arr, curr) => {
  return arr + curr;
});

console.log(sumOfArrays);

// Find the maximum number

let maxNumber = arr.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
});

console.log(maxNumber);
