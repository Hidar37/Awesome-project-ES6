/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-expressions */
import * as variables from '../modules/values.js';
import BookStore from '../modules/BookStore.js';
import Time from '../modules/showDate.js';

variables.bookContainer;
variables.form;
variables.bookTitle;
variables.bookAuthor;
variables.bookNav;
variables.addBookNav;
variables.contactNav;
variables.months;
variables.dateDisplay;

const bookObj = new BookStore(variables.bookTitle, variables.bookAuthor);

if (localStorage.getItem('book') !== null) {
  bookObj.setBookList();
  bookObj.addBook();
}
// Show Time
const showDateTime = new Time();
showDateTime.showTime();

variables.form.addEventListener('submit', (e) => {
  e.preventDefault();
  bookObj.displayBooks();
});

// Navigation
variables.bookNav.addEventListener('click', () => {
  document.getElementById('book-list').style.display = 'block';
  document.getElementById('add-book').style.display = 'none';
  document.getElementById('contact-section').style.display = 'none';
});

variables.addBookNav.addEventListener('click', () => {
  document.getElementById('book-list').style.display = 'none';
  document.getElementById('add-book').style.display = 'block';
  document.getElementById('contact-section').style.display = 'none';
});

variables.contactNav.addEventListener('click', () => {
  document.getElementById('book-list').style.display = 'none';
  document.getElementById('add-book').style.display = 'none';
  document.getElementById('contact-section').style.display = 'block';
});
