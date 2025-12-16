const numbers = [2, 3, 4, 16, 65, 244, 576, 5, 100, 15, 20, 25];
const doubled = numbers.map( num => num * 2);
console.log(numbers); // original array
console.log(doubled); // doubled array

const filtering = numbers.filter( num => num % 2 === 0);
console.log(filtering); // filtered array numbers based on condition

const filter  = numbers.map( num => num % 2 === 0);
console.log(filter);  // gives true true false false cause num % 2 === 0, always returns the true/false