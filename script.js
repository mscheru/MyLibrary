let myLibrary = []

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  let list = document.querySelector("ul");
  for (let book of myLibrary) {
    let card = document.createElement("div");
    card.classList.add("card");
    let bk = document.createElement("li");
    let title = document.createElement("h2");
    let author = document.createElement("h2");
    list.appendChild(card);
    card.appendChild(bk);
    bk.appendChild(title);
    bk.appendChild(author);
  }
}