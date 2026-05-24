// ==========================
// Basic User Class
// ==========================

class User{
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getInfo(){
        return this;
    }

    isAdult(){
        if(this.age >= 18){
            return true;
        } else {
            return false;
        }
    }
}


const u1 = new User("Baka", 22, "baka@gmail.com");
const u2 = new User("Ciel", 33, "Ciel@gmail.com");
const u3 = new User("ionide", 32, "ionide@gmail.com");

// console.log(u1.getInfo());
// console.log(u2.isAdult());
// console.log(u3);


// ====================================
// Bank Account Class
// ====================================

class BankAccount{
    constructor(accountNumber, accountHolder, balance = 0){
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount){
        if(!Number.isFinite(amount)) return "Must be Valid Number";
        if(amount <= 0) return "Amount Must be Positive"

        this.balance += amount;
        return this.balance;
    }

    withdraw(amount){
        if(!Number.isFinite(amount)) return "Must be Valid Number";
        if(amount > this.balance) return "Not Suff Balance";
        if(amount < 0) return "Must be Greater than Zero";

        this.balance -= amount;
        return this.balance;
    }

    getBalance(){
        return this.balance;
    }
}

/* const bank1 = new BankAccount("23021141ADZ07", "Baka", 2500);
console.log(bank1.deposit(2500));
console.log(bank1.withdraw(5000));
console.log(bank1.getBalance()); */


//  ========================
// Product and Shopping Cart (Arrays + Classes)
// =========================

class Product{
    constructor(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getDetails(){
        return {
            name: this.name,
            prie: this.price,
            category: this.category
        }
    }
}

class ShoppingCart{
    constructor(){
        this.items = [];
    }

    addItem(product, quantity = 1){
        if(!(product instanceof Product)) return "Error: Invalid Product";
        if(quantity <= 0 || !(typeof quantity === 'number')) return "Quantity Must be Number and Greater than Zero";

        const productExist = this.items.find( item => item.product.name == product.name);

        if(productExist){
            productExist.quantity += quantity;
        } else {
            this.items.push({
                product: product,
                quantity: quantity
            })
        }

        return `${product} x ${quantity}`

    }
}


// continue Later


// ================================
//      Library Management System
// ================================


class Book{
    constructor(title, author, isbn, isAvailable = true){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = isAvailable;
    }
}

class Library{
    constructor(){
        this.books = [];
    }

    addBook(book){
        if(!(book instanceof Book)) return "Error: Invalid Book";

        return this.books.push({
            Title: book.title
        });
    }
}

const book1 = new Book("One Piece", "Ecchiro Oda", "70058ZIBA0", true);
const library = new Library();
console.log(library.addBook(book1));