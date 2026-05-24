You are absolutely correct on the core mechanics! You have successfully identified how the this context shifts depending on where it is called and how the function is invoked. [1] 
Here is a breakdown of your observations to confirm what is "spot on" and what has a tiny bit of technical nuance:
## 1. The Global this (Outside the function)

* Correct: Outside of any function (in the global scope), this typically refers to the global object.
* Context Matters: In a web browser, this global object is window. If you are using Node.js, this in the global scope of a file actually refers to an empty object ({}), which represents module.exports. [1, 2, 3, 4, 5] 

## 2. The Constructor this (Inside the function)

* Correct: When you use the new keyword, a brand-new empty object is created, and this inside that function is "bound" to that new object.
* Implicit Return: You noticed you used a return; statement. In a constructor function called with new, JavaScript automatically ignores a primitive return (like undefined from a bare return;) and returns the this object instead. [6, 7, 8] 

## Summary of what happens in your code:

```js
function Users(name){
    this.name = name; // 'this' is the new object being built
    this.city = "India";
    console.log(this); // Prints the specific object (e.g., Users {name: "Oka", city: "India"})
}

console.log(this); // Prints the Global Object (Window in browser)
console.log(new Users("Oka")); // Prints the instance created by the constructor
```

## One Important Rule
If you call `Users("Oka")` without the `new` keyword, this would suddenly point back to the global object (in non-strict mode), potentially "polluting" your global scope by adding a name and city property to window. This is why the new keyword is the "magic" that makes it a constructor.
