const users = [
    {user: "Kiuru", age: 21},
    {user: "Onkmade", age: 8},
    {user: "Sears", age: 18},
    {user: "Amazilla", age: 16},
    {user: "Oink", age: 90}
];

const ageValid = users.some( userAge => !userAge.age >= 18 );  // all users are not above 18 or 18
const agecheck = users.every( userage => userage.age >= 18);
console.log(ageValid);
console.log(agecheck);