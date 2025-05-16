class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(...book);
    }

    listAllBooks() {
        this.books.forEach((book) => {
            console.log(book);
        });
    }
}

class Book {
    constructor(name, isbn, price, author) {
        this.name = name;
        this.isbn = isbn;
        this.price = price;
        this.author = author;
        this.read = false;
    }

    info() {
        console.log(`${this.read ? '✅' : '❌'} Name: ${this.name}, is written by ${this.author}, and you have ${this.read ? 'read it' : 'not read it'}. ISBN: ${this.isbn}, Price: $${this.price}`);
    }

    changeReadStatus() {
        this.read = !this.read;
    }
}
let library = new Library();

let book1 = new Book("The Great Gatsby", "123456789", 10.99, "F. Scott Fitzgerald");
let book2 = new Book("To Kill a Mockingbird", "987654321", 12.99, "Harper Lee");
let book3 = new Book("1984", "123456789", 15.99, "George Orwell");


// library.addBook(book1);
// library.addBook(book2);
// library.addBook(book3);
library.addBook([book1, book2, book3]);
