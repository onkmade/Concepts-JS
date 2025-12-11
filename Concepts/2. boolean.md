### Here: what I understand about booleans and ternary operators.
Okay, so boolean is used when the value is fixed, but when it is manually updated, 
it changes, so we must act on that change. correct and ternary 
is when it reads the current state of the task and takes action based on it.

A **boolean** is a data type that can hold one of two values: `true` or `false`.
Booleans are super useful for representing binary states or conditions.
```js
condition ? valueIfTrue : valueIfFalse
```

short for `if…else`, it’s structured like this:
Example:
```js
let message = isLoggedIn ? "Welcome!" : "Please log in";
```

* If `isLoggedIn` is true, `message` becomes `"Welcome!"`.
* If false, it becomes `"Please log in"`.

It’s a quick way to make decisions without writing multiple lines of `if…else`.
 ---
they’re perfect examples:

* **Login status** → logged in (`true`) or not (`false`)
* **Radio buttons / checkboxes** → checked (`true`) or unchecked (`false`)
* **Two-choice options** → yes/no, on/off, active/inactive

All these naturally represent **true/false states**, which is exactly what booleans are for.

## Questions: 

1. Declare a boolean variable `isRaining` and set it to `true`. Print it using `console.log()`.
2. Create a boolean variable `hasLicense` and assign `false`. Then print `"Can drive"` if true or `"Cannot drive"` if false using `if…else`.
3. Ask the user `"Do you like ice cream?"` with `prompt()`, convert the answer to a boolean, and display it.
4. Declare `let isOpen = true;` and use an `if…else` statement to print `"Store is open"` or `"Store is closed"`.
5. Create a boolean variable `isAdult = false` and use a ternary operator to display `"Access granted"` or `"Access denied"`.
6. Make a boolean variable `isSunny = true` and toggle it to `false`. Print the new value.
7. Check if `5 > 3` and store the result in a boolean variable `result`. Print `result`.
8. Declare `let isWeekend = false;` and use a ternary operator to print `"Relax"` or `"Work"` based on its value.
9. Create a boolean variable `hasAccount = true`. Use `if…else` to print `"Login"` or `"Sign up"`.
10. Ask the user `"Are you hungry?"` and convert the response to a boolean. Use a ternary to display `"Eat something"` or `"Wait until meal"`.

These problems **only use booleans, if…else, ternary operators, and basic input/output**, so they’re perfect for starting out.

## Tips 
- Use `.toLowerCase()` when converting user input to boolean for consistency.
- Remember that non-empty strings are `true`, and empty strings are `false` in boolean context.
- Test your code with different inputs to see how booleans and ternary operators behave.