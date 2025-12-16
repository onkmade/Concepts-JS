// Finding the active Users
const users = [
    {name: "kiuru", id: 1, isactive: false},
    {name: "Sam", isactive: true},
    {name: "servus", isactive: false},
    {name: "Aaru", isactive: true}
];

const activeUser = users.filter( user => user.isactive);
// console.log(activeUser);

const numbers = [1 , 7, 3, 4, ,5, 7];
console.log(numbers); // - original string
const findingeven = numbers.find( num => num % 2 === 0);
console.log(findingeven); // - this is the 1st value it returns

const animes = [
    { name: "Kingwars", seasons: 5, genre: "Romance"},
    { name: "The One Piece", seasons: 22, genre: "Adventure"},
    { name: "Jujutsu Kaise", seasons: 2, genre: "Action"}, 
    { name: "Demon Slayer", seasons: 4, genre: "Action"}
];

