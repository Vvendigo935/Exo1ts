import { Book } from "./Book.js";
import { Author } from "./author.js";

export class Library {

    private books : Book[];

    constructor(books : []){
 this.books = books;
    }


    addBook(book: Book) {
this.books.push(book);
    }







    getDetail(): string {
        return `book: ${this.books}`
    }
}

