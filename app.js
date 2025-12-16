// Finding the active Users
const users = [
    {name: "kiuru", isactive: false},
    {name: "Sam", isactive: true},
    {name: "servus", isactive: false},
    {name: "Aaru", isactive: true}
];

const activeUser = users.filter( user => user.isactive);
console.log(activeUser);
