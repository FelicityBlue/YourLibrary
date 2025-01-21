function Book(title, author, read){
    this.title = title;
    this.author = author;
    this.read = read;
}

const myLibrary = [];

function addBookToLibrary(title, author, read) {
    let book = new Book(title, author, read);
    myLibrary.push(book); 
}

function addBook(){
    const addBookButton = document.querySelector('#add-btn');
    const cancelButton = document.querySelector('#cancel-btn');
    const addBookModal = document.querySelector('#book-modal');
    const dialogForm = document.querySelector("#dialog-form")
    addBookButton.addEventListener("click", () => {
        addBookModal.showModal();
    });
    
    cancelButton.addEventListener("click", () => {
        addBookModal.close();
    });

    dialogForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        addBookToLibrary(formProps.title, formProps.author, formProps.read_book);
    });


}

addBook();
