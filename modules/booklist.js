import StandardBook  from "./book.js";
export default class StandardBooks {
    constructor() {
      this.books = [];
    }
  
    addBook = (title, author) => {
      const p = new StandardBook(title, author);
      this.books.push(p);
      return p;
    }
  
    allBooks = () => this.books
  
    removeBook = (index) => {
      this.books.splice(index, 1);
    }
  }