function Book(title, author, read){
    this.title = title;
    this.author = author;
    this.read = read;
}

const myLibrary = [];

function addBookToLibrary(title, author, read) {
    let book = new Book(title, author, false);
    myLibrary.push(book); 
}


