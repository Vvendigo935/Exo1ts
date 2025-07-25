import { Author } from "./author.js";

export interface Book {
    readonly id: number,
    title: string,
    author: Author;
    pagesNbr: number,
    isAvailable: boolean;
}