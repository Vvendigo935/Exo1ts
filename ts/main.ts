import { Book } from "./Book.js";
import { Author } from "./author.js";
import { Library } from "./Library.js";





let author1 : Author = {
    id: 1,
    name: "Toto",
    birthYear: new Date(2000, 6, 25),
    genres: ["policier", "roman", "aventure"]
}

let author2 : Author = {
    id: 2,
    name: "Nicolas",
    birthYear: new Date(1955, 6, 25),
    genres: ["politique"]
}



function createBook(titleN, authorN, pagesNbrN){
    let book : Book = {
        id: 1,
        title: titleN,
        author: authorN,
        pagesNbr: pagesNbrN,
        isAvailable: true
    }
return book;
}

let book1 = createBook("Le temps des tempetes", author2, 512);



function toggleAvailability(book){
    book.isAvailable = !book.isAvailable;
} 

toggleAvailability(book1);

// -------------------

