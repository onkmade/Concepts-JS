const company = {
    name: "Blackstone",
    manufacturing: [ "Food", "Health Care", "Toys", "Shops", "Inventory"], 
    address:[
        { street: "AD55 Wall", city: "Kansas", state: "USA", zipcode: 454225 },
        { street: "Pokemon Mesuem", city: "Paris", state: "France", zipcode: 29955 },
        { street: "Tower k56", city: "Berlin", state: "Germany", zipcode: 84525 }
    ], 
    yearOfEstablishment: 2013
};

// I want to add the properties to the object company
company.isOpen = true;
console.log(company);
company.address[1].isClose = false;

delete company.isOpen
console.log(company);