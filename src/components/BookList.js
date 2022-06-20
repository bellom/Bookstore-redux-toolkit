import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookForm from './BookForm';
import Book from './Book';
import { booksSelector, getBooks } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  const state = useSelector(booksSelector);
  const books = state.books[0];
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const listify = (books) => Object.keys(books).length > 0 ? Object.keys(books).map((key) => (
    <Book
      key={key}
      title={books[key][0].title}
      author={books[key][0].author}
      id={key}
    />
  )): <p>No books to display</p>;
  return (
    <div>
      <h1>List of Books</h1>
      <div className="book-list">
        {books ? listify(books) : 'Loading...'}
      </div>
      <BookForm />
    </div>
  );
};

export default BookList;
