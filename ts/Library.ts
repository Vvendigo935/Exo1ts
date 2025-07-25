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

findBookByTitle(title: string){
    this.books.
}

removeBook(title: string){
    let book = findBookByTitle(title);
    this.books.
}





    getDetail(): string {
        return `book: ${this.books}`
    }
}

