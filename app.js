const priceTax = 15120;
const payTax = 20500;
const totalTax = priceTax + payTax;
const profit = totalTax / 100;
console.log(profit); 
console.log(profit.toFixed(2)); // rounds the n decimal places
console.log(profit.toPrecision(3)); // grab the 1st significant bits