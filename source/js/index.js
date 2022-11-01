/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-trailing-spaces */

import * as variables from '../modules/values.js';
import BookStore from '../modules/BookStore.js';

variables.bookContainer;
variables.form;
variables.bookTitle;
variables.bookAuthor;
variables.bookNav;
variables.addBookNav;
variables.contactNav;
variables.months;
variables.dateDisplay;
function showDate() {
  const dateObj = new Date();
  const month = variables.months[dateObj.getMonth()];
  const day = dateObj.getDay();
  const year = dateObj.getFullYear();
  const hour = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const secnod = dateObj.getSeconds();
  let amPM = null;
  if (hour >= 12) {
    amPM = 'PM';
  } else {
    amPM = 'AM';
  }
  variables.dateDisplay.innerText = `${month} ${day}th ${year}, ${hour}:${minutes}:${secnod}${amPM}`;
}

const bookObj = new BookStore(variables.bookTitle, variables.bookAuthor);

if (localStorage.getItem('book') !== null) {
  bookObj.setBookList();
  bookObj.addBook();
}

setInterval(showDate, 1000);
// Add Button and create local storage
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
