### In-Depth Explanation of `element.addEventListener(eventType, callbackFunction)`

The line `element.addEventListener(eventType, callbackFunction)` is the **standard, modern, and most powerful way** to attach event listeners in JavaScript. It tells the browser: "When this specific event happens on this element, run my callback function."

This method is the foundation of all interactivity on the web — button clicks, form submissions, typing in inputs, hovering, scrolling, etc. — and it’s the one you’ll use in almost every real project.

#### 1. What Each Part Means

- `element`  
  The DOM element (or object) you want to listen on.  
  Example: `document.getElementById("btn")`, `document.querySelector(".card")`, or even `document` itself.

- `.addEventListener()`  
  A method available on **every DOM node** (elements, document, window, etc.).  
  It allows you to attach **multiple listeners** to the same event without overwriting previous ones (unlike the old `element.onclick = ...` style).

- `eventType` (string)  
  The name of the event you’re listening for, in quotes. Common examples:  
  - `"click"`  
  - `"input"`  
  - `"change"`  
  - `"submit"`  
  - `"keydown"`  
  - `"mouseover"`  
  - `"scroll"`  
  - `"load"` (on `window` or `document`)  
  Full list: https://developer.mozilla.org/en-US/docs/Web/Events

- `callbackFunction`  
  The function that will be executed when the event occurs.  
  This function is automatically called with one argument: the **event object** (often named `event` or `e`).  
  You can write it as:
  - Named function: `function handleClick(e) { ... }`
  - Anonymous: `function(e) { ... }`
  - Arrow: `(e) => { ... }`

#### 2. Why `addEventListener` is Better Than Old Ways

**Old (bad) way:**
```js
button.onclick = function() { ... };
// This overwrites any previous click handler
```

**Modern (good) way:**
```js
button.addEventListener("click", () => { ... });
button.addEventListener("click", anotherFunction); // both run!
```

You can add as many listeners as you want, and remove them later with `.removeEventListener()`.

#### 3. The Event Object — What’s Passed to the Callback

Every time the event fires, the browser passes an **event object** to your callback. This object contains valuable information.

```js
button.addEventListener("click", (event) => {
  console.log(event); // MouseEvent object
  console.log(event.target);       // the element that was clicked
  console.log(event.currentTarget); // the element the listener is attached to
  console.log(event.type);         // "click"
  console.log(event.clientX, event.clientY); // mouse coordinates
});
```

Most common properties:
- `event.target` → the element that actually triggered the event (important when clicking on children)
- `event.currentTarget` → the element the listener is attached to
- `event.preventDefault()` → stops default browser behavior (e.g., form submit, link navigation)

#### 4. Common Events and Their Use Cases

| Event       | When it fires                              | Typical use case                          |
|-------------|--------------------------------------------|-------------------------------------------|
| `"click"`   | User clicks the element                    | Buttons, links, cards                     |
| `"input"`   | Value changes in input/textarea            | Live search, form validation              |
| `"change"`  | Value changes and element loses focus      | Select boxes, checkboxes                  |
| `"submit"`  | Form is submitted (Enter or button)        | Form handling                             |
| `"keydown"` | Key is pressed                             | Keyboard shortcuts, games                 |
| `"mouseover"` / `"mouseout"` | Mouse enters/leaves element | Dropdown menus, tooltips                  |
| `"scroll"`  | User scrolls                               | Infinite scroll, sticky headers           |

#### 5. Real-World Examples

**Example 1: Toggle a class on click**
```js
const box = document.querySelector(".box");
box.addEventListener("click", () => {
  box.classList.toggle("highlight");
});
```

**Example 2: Live search input**
```js
const searchInput = document.getElementById("search");
const items = document.querySelectorAll("li");

searchInput.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  items.forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(term) ? "" : "none";
  });
});
```

**Example 3: Prevent form submission**
```js
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload
  console.log("Form submitted!");
});
```

#### 6. Removing a Listener (Advanced but Useful)

```js
function handleClick() {
  console.log("Clicked!");
}

button.addEventListener("click", handleClick);
// Later...
button.removeEventListener("click", handleClick); // must be same function reference
```

#### Your Immediate Practice Task

Create this HTML and make it fully interactive:

```html
<button id="btn">Click Me</button>
<input id="input" type="text" placeholder="Type here">
<p id="output">Nothing yet</p>
```

**Requirements:**
- Clicking the button changes its text to "Clicked!" and background to red.
- Typing in the input updates the `<p>` with the current value in real time.
- Use `addEventListener` for both events.
