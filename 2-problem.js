// Book list

class BookList {
    constructor() {
        this.books = [];
        this.favoriteBook = '';
    }

    addBook(title, author) {
        this.books.push({ title, author });
    }

    setFavoriteBook(title) {
        this.favoriteBook = title;
    }

    getBooksList() {
        let result = []

        for(let book of this.books) {
            result.push([`Book name: ${book.title}, Author: ${book.author}`]);
        }
        
        return result;
    }

    getFavoriteBook() {
        return `Favorite book is "${this.favoriteBook}"`;
    }
}


const bookList = new BookList();
bookList.addBook('The Catcher in the Rye', 'J.D. Salinger');
bookList.addBook('To Kill a Mockingbird', 'Harper Lee');
bookList.addBook('1984', 'George Orwell');
bookList.setFavoriteBook('1984');
console.log(bookList.getBooksList());
console.log(bookList.getFavoriteBook());