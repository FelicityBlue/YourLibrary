function Book(title, author, read){
    this.title = title;
    this.author = author;
    this.read = read;
}

const myLibrary = [];
const container = document.getElementById("book-container");
container.innerHTML = '';

function addBookToLibrary(title, author, read) {
    let book = new Book(title, author, read);
    myLibrary.push(book); 

    let newBook = document.createElement("div");
    newBook.classList.add("book-card");
    newBook.innerHTML = `Title ${title}<br>Author ${author}<br>Read ${read}<br><img src = "assets/images/kid_star.svg" alt="star icon"/>`
    container.appendChild(newBook);

}

function addBook(){
    const addBookButton = document.querySelector('#add-btn');
    const cancelButton = document.querySelector('#cancel-btn');
    const addBookModal = document.querySelector('#book-modal');
    const dialogForm = document.querySelector("#dialog-form")
    addBookButton.addEventListener("click", () => {
        console.log("Clicked show modal");
        addBookModal.showModal();
    });
    
    cancelButton.addEventListener("click", (e) => {
        e.preventDefault();
        addBookModal.close();
    });

    dialogForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        addBookToLibrary(formProps.title, formProps.author, formProps.read_book);
    });
}

function userSignIn(){
    const signInButton = document.getElementById('sign-in-btn');
    const loginButton = document.getElementById('login-btn');
    const signInModal =  document.getElementById('sign-in-modal');
    const cancelButton = document.getElementById('cancel-signin-btn');

    signInButton.addEventListener("click", () => {
        signInModal.showModal();
    });
    cancelButton.addEventListener("click", (e) => {
        e.preventDefault();
        signInModal.close();
    });
    loginButton.addEventListener("click", () => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        console.log(formProps);
    });
}

addBook();
userSignIn();
