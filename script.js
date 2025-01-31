function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const myLibrary = [];
const container = document.getElementById("book-container");

function renderBooks() {
    container.innerHTML = "";

    for (const [idx, book] of Object.entries(myLibrary)) {
        let title = book.title;
        let author = book.author;
        let pages = book.pages;
        let read = book.read;
        // card
        let currBook = document.createElement("div");
        currBook.classList.add("book-card");
        
        
        let removeContainer = document.createElement("div");
        let removeBtn = document.createElement("button");
        let cancelImg = document.createElement("img");
        cancelImg.src = "assets/images/cancel.svg";
        cancelImg.alt = "cancel icon";
        cancelImg.width = 50;
        cancelImg.height = 50;

        removeContainer.classList.add("btn-container");
        removeBtn.classList.add("remove-btn");
        removeBtn.addEventListener("click", () => {
            removeBook(idx);
        });

        removeBtn.appendChild(cancelImg);
        removeContainer.appendChild(removeBtn);
        currBook.appendChild(removeContainer);

        // container for title info
        let titleContainer = document.createElement("div");
        titleContainer.classList.add("book-info");
        let title_left = document.createElement("div");
        title_left.innerHTML = `<b>Title</b>`;
        let title_right = document.createElement("div");
        title_right.innerHTML = `${title}`;
        titleContainer.appendChild(title_left);
        titleContainer.appendChild(title_right);
        currBook.appendChild(titleContainer);

        // container for author info
        let authorContainer = document.createElement("div");
        authorContainer.classList.add("book-info");
        let author_left = document.createElement("div");
        author_left.innerHTML = `<b>Author</b>`;
        let author_right = document.createElement("div");
        author_right.innerHTML = `${author}`;
        authorContainer.appendChild(author_left);
        authorContainer.appendChild(author_right);
        currBook.appendChild(authorContainer);

        // container for pages info
        let pagesContainer = document.createElement("div");
        pagesContainer.classList.add("book-info");
        let pages_left = document.createElement("div");
        pages_left.innerHTML = `<b>Pages</b>`;
        let pages_right = document.createElement("div");
        pages_right.innerHTML = `${pages}`;
        pagesContainer.appendChild(pages_left);
        pagesContainer.appendChild(pages_right);
        currBook.appendChild(pagesContainer);

        // container for read info
        let readContainer = document.createElement("div");
        let switchBtn = document.createElement("button");
        readContainer.classList.add("read-container");
        switchBtn.classList.add("toggle-read");

        if (read === true) {
            switchBtn.innerHTML = "Read";
            switchBtn.classList.add("had-read");

        } else {
            switchBtn.innerHTML = "Not Read";
            switchBtn.classList.add("hasnt-read");
        }
        switchBtn.addEventListener("click", () => {
            toggleRead(idx);
        });

        readContainer.appendChild(switchBtn);

        currBook.appendChild(readContainer);

        container.appendChild(currBook);
    }
}

function addBook() {
    const addBookButton = document.querySelector("#add-btn");
    const cancelButton = document.querySelector("#cancel-btn");
    const addBookModal = document.querySelector("#book-modal");
    const dialogForm = document.querySelector("#dialog-form");
    
    addBookButton.addEventListener("click", () => {
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

        // add the submitted book information to the array
        let book = new Book(
            formProps.title,
            formProps.author,
            formProps.pages,
            formProps.read_book
        );
        myLibrary.push(book);
        addBookModal.close();
        renderBooks();
    });
}

function removeBook(idx) {

    const removeCheckModal = document.getElementById("confirm-remove-modal");
    const yesBtn = document.getElementById("cancel-confirm-btn");
    const noBtn = document.getElementById("cancel-cancel-btn");

    removeCheckModal.showModal();

    yesBtn.addEventListener("click", () => {
        console.log("Yes");
        myLibrary.splice(idx, 1); 
        removeCheckModal.close(); 
        renderBooks();
    });

    noBtn.addEventListener("click", (e) => {
        e.preventDefault(); 
        removeCheckModal.close();
    });
}

function toggleRead(idx) {

    if (myLibrary[idx].read === true) {
        myLibrary[idx].read = false

    } else {
        myLibrary[idx].read = true;
    }
    renderBooks();
}

function userSignIn() {
    const signInButton = document.getElementById("sign-in-btn");
    const loginButton = document.getElementById("login-btn");
    const signInModal = document.getElementById("sign-in-modal");
    const cancelButton = document.getElementById("cancel-signin-btn");

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
    });
}

//for (let i = 0; i <= 20; i++){
    let book = new Book("hello", "world", 100, true);
    myLibrary.push(book);
//}
addBook();
userSignIn();
renderBooks();
