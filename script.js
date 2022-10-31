class User {
  #firstName;
  #lastName;
  #city;
  #booksList;
  constructor(firstName, lastName, city) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#city = city;
    this.#booksList = [];
  }

  getName() {
    return this.#firstName + " " + this.#lastName;
  }

  takeBook(book) {
    if (book.getOwener() === null) {
      console.log(`${this.getName()} take the book: ${book.getBookName()}`);
      book.setOwener(this.getName());
      this.#booksList.push(book);
    } else {
      console.log(`the book ${book.bookName} already owned`);
    }
  }
}

class Book {
  #bookName;
  #owener;
  constructor(bookName) {
    this.#bookName = bookName;
    this.#owener = null;
  }

  getBookName() {
    return this.#bookName;
  }

  getOwener() {
    return this.#owener;
  }

  setOwener(owener) {
    this.#owener = owener;
  }
}

let s1 = new User("Tamir", "Linden", "Holon");
let s2 = new User("Nadav", "Hararri", "Gan Yavne");
let s3 = new User("Moshe", "Amsalem", "Or Akiva");

let b1 = new Book("I robot");
let b2 = new Book("Harry Potter");
let b3 = new Book("The Witcher");
let b4 = new Book("Inception");

s1.takeBook(b1);
s1.takeBook(b2);
s2.takeBook(b3);
s3.takeBook(b4);
s1.takeBook(b1);
s2.takeBook(b3);
s3.takeBook(b4);
s3.takeBook(b2);
