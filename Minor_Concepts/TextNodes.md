In JavaScript, a **text node** is the part of the DOM that represents the actual text written inside an HTML element. For example, if you have `<p>Hello World</p>`, the `<p>` is an element node, but **“Hello World” itself is a text node**. In JavaScript, you can clearly see this by accessing the `childNodes` of an element. For instance, `const p = document.querySelector('p'); console.log(p.childNodes[0]);` will log a **Text node** whose value is `"Hello World"`. You can also create a text node directly using JavaScript with `document.createTextNode("I am a text node")`, and then insert it into an element using `element.appendChild(textNode)`. This shows that text inside elements is not just a string, but a real node in the DOM tree, separate from the element itself.

Text nodes are important because they allow you to manipulate the text content of elements programmatically. You can change the text by modifying the `nodeValue` or `data` property of a text node. For example, if you have a text node stored in a variable called `textNode`, you can change its content by doing `textNode.nodeValue = "New Text Content"`.

```js
const p = document.querySelector('p');
const textNode = p.childNodes[0]; // This is the text node "Hello World
textNode.nodeValue = "New Text Content"; // Now the paragraph will display "New Text Content"
```
