const fu = ["banana", "apple", "kiwi", "orange"];
const du = [23, 43, 54,65,76];
const newfudu = [...du, ...fu];
// console.log(newfudu);

const neeww = [
    ...du.slice(0, 2),
    "parrot",
    ...du.slice(2)
];

console.log(neeww);