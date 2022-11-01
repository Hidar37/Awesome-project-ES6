import { bookContainer } from './values.js';
import { bookTitle } from './values.js';
import { bookAuthor } from './values.js';

export default class AwesomeBook {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.bookList = [];
  }

  setBookList() {
    return this.bookList = JSON.parse(localStorage.getItem('book'));
  }

  // Remove Button
  removeBook(btnAdderss, bookArray, btnIndex, parentDiv) {
    btnAdderss.addEventListener('click', () => {
      bookArray.splice(btnIndex, 1);
      localStorage.setItem('book', JSON.stringify(bookArray));
      parentDiv.remove();
      window.location.reload();
    });
  }

  // Adding Books
  addBook() {
    const bookData = JSON.parse(localStorage.getItem('book'));
    bookData.forEach((item, index) => {
      const bookDiv = document.createElement('div');
      const bookItem = document.createElement('p');
      const removeButton = document.createElement('button');
      bookItem.appendChild(document.createTextNode(`${item.title} by ${item.author}`));
      removeButton.setAttribute('class', 'remove');
      bookItem.setAttribute('class', 'book');
      bookDiv.setAttribute('class', 'book-card');
      removeButton.appendChild(document.createTextNode('Remove'));
      // Remove Button Logic
      this.removeBook(removeButton, bookData, index, bookDiv);
      bookDiv.append(bookItem, removeButton);
      bookContainer.appendChild(bookDiv);
    });
  }

  // Displaying Books
  displayBooks() {
    const book = {
      title: this.title.value,
      author: this.author.value,
    };
    this.bookList.push(book);
    localStorage.setItem('book', JSON.stringify(this.bookList));
    bookContainer.innerHTML = '';
    this.addBook();
    bookTitle.value = '';
    bookAuthor.value = '';
  }
}