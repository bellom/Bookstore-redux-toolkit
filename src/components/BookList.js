import React from 'react';
import { useSelector } from 'react-redux';
import BookForm from './BookForm';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const listify = (books) => books.map((book) => (
    <Book
      title={book.title}
      author={book.author}
      id={book.id}
      key={book.id}
    />
  ));
  return (
    <div>
      <h1>List of Books</h1>
      <div className="book-list">
        {listify(books)}
      </div>
      <BookForm />
    </div>
  );
};

export default BookList;
