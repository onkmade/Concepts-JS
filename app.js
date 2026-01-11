// find only returns the 1st element whose confidence has been satisfied
const box = ["anime", true, "thunders", 34];
box.push("narendra"); // add element from the end 
box.unshift("kingaaru"); // add element from the front
box.shift(); // remove element from the start
console.log(box); 
