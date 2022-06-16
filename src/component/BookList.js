import React from "react";
import BookForm from './BookForm';
import Book from './Book';

const BookList = () => (
  <div>
    <h1>List of Books</h1>
    <div className="book-list">
      <Book /> 
    </div>
    <BookForm />
  </div>
);

export default BookList;
