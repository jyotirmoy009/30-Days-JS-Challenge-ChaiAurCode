// Activity 1:
// Task1
const book = {
    title : "Assam Year book",
    author : "Santanu Kausik Baruah",
    year : 2021,
}
console.log(book);

// Task 2
console.log("Title:", book.title);
console.log("Author:", book.author);

// Activity 2:
// Task 3
const books = {
    title : "Assam Year book",
    author : "Santanu Kausik Baruah",
    year : 2021,
    getTitleAuthor: function() {
        return `${this.title} by ${this.author}`;
    }
}
console.log(books.getTitleAuthor());

// Task4
const Book = {
    title : "Assam Year book",
    author : "Santanu Kausik Baruah",
    year : 2021,
    getTitleAuthor: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function (newYear) {
        this.year = newYear;
    }
}
Book.updateYear(2024)
console.log(Book);

// Task 5
const book1 = {
    title : "Assam Year book",
    author : "Santanu Kausik Baruah",
    year : 2021,
}
const book2 = {
    title : "Assam Year book",
    author : "Santanu Kausik Baruah",
    year : 2021,
}
const book3 = {
    title : "Assam Year book",
    author : "Santanu Kausik Baruah",
    year : 2021,
}
const library = {
    name: "District Library",
    books: [book1, book2, book3]
}
console.log(library);

// Task 6
console.log("Library Name:", library);
library.books.forEach((book, index)=> {
    console.log(`Book ${index + 1} Title:`, book.title);
})

// Task7
const bookNew = {
    title : "Lucent",
    author : "Binay Karna",
    year : 2022,
    getTitleYear: function () {
        return `${this.title} in ${this.year}`
    }
}
console.log(bookNew.getTitleYear());

// Task 8
for(let property in bookNew) {
    console.log(`${property}: ${bookNew[property]}`);
}

// Task 9
const keys = Object.keys(bookNew)
const values = Object.values(bookNew)
console.log("Keys:", keys);
console.log("Values", values);