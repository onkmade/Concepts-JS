# Logical Operators 

There are 4 main logical operators In JavaScript:
1. **AND (`&&`)**: Returns `true` if both operands are true.
2. **OR (`||`)**: Returns `true` if at least one operand is true.
3. **NOT (`!`)**: Returns the opposite boolean value of the operand.
4. **Nullish Coalescing (`??`)**: Returns the right operand if the left operand is `null` or `undefined`; otherwise, it returns the left operand.

## 1. OR Operator (`||`)
The OR operator (`||`) is used to combine two or more boolean expressions. It returns `true` if at least one of the expressions evaluates to `true`. If all expressions are `false`, it returns `false`.
### Syntax
```javascript
expression1 || expression2
```
### Example
```javascript
let isWeekend = true;
let isHoliday = false;
if (isWeekend || isHoliday) {
    console.log("You can relax!");
} else {
    console.log("Time to work!");
}
```

## Questions:

1. Create two boolean variables `isSunny` and `isWeekend`. Use `||` to print `"Go outside"` if **either one is true**.
2. Ask the user `"Do you have a ticket?"` and `"Do you have a pass?"` using `prompt()`. Use `||` to check if they can **enter the event**.
3. Declare `let a = true; let b = false;` and use `||` to print `true` or `false`.
4. Create a variable `isAdult` and `hasPermission`. Use `||` to allow access if **either is true**.
5. Ask the user `"Do you like tea?"` and `"Do you like coffee?"`. Use `||` to print `"Beverage available"` if they like **at least one**.
6. Declare `let isRaining = false; let hasUmbrella = true;` Use `||` to decide if the person **stays dry**.
7. Ask the user `"Do you have a phone?"` or `"Do you have an email?"`. Use `||` to print `"We can contact you"`.
8. Create variables `isMorning` and `isHoliday`. Use `||` to print `"You can sleep in"` if **either is true**.
9. Declare `let likesMath = false; let likesScience = true;` Use `||` to check if the student **likes at least one subject**.
10. Ask the user `"Are you registered?"` or `"Are you invited?"`. Use `||` to print `"Access granted"` if **either is true**.


## Answers:
1. 
```javascript
let isSunny = true;
let isWeekend = false;
if (isSunny || isWeekend) {
    console.log("Go outside");
}
```
2. 
```javascript
let hasTicket = prompt("Do you have a ticket?").toLowerCase() === "yes";
let hasPass = prompt("Do you have a pass?").toLowerCase() === "yes";
if (hasTicket || hasPass) {
    console.log("You can enter the event");
}

```
In this code snippet,
// we first declare the variable `hasTicket` using `let`. Then we assign it the result of the expression `prompt("Do you have a ticket?").toLowerCase() === "yes"`. Here’s what happens step by step: the `prompt()` function displays a dialog asking the user for input and returns their answer as a string. The `.toLowerCase()` method converts that string to lowercase to handle variations like `"Yes"` or `"YES"`. Then the expression compares the lowercase string to `"yes"` using `===`, which evaluates to `true` if it matches or `false` if it doesn’t. Finally, that boolean value (`true` or `false`) is stored in the variable `hasTicket`. So the variable ends up holding a **boolean that reflects the user’s answer**, not the string itself.

3. 
```javascript
let a = true;
let b = false;
console.log(a || b); // true
// you can put any expression inside the console.log, it will evaluate the expression and print the result
```
