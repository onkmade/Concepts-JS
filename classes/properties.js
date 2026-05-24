class Person{
    #name;
    #lastname;

    constructor(name, lastname){
        this.#name = name;
        this.#lastname = lastname;
    }
}

const p = new Person("Maria", "Jackson");
console.log(p.name, p.lastname);