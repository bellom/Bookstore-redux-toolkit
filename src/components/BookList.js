import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { booksSelector, getBooks } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  const state = useSelector(booksSelector);
  const books = state.books[0];
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  const listify = (books) => {
    if (Object.keys(books).length > 0) {
      return Object.keys(books).map((key) => (
        <Book
          key={key}
          title={books[key][0].title}
          author={books[key][0].author}
          category={books[key][0].category}
          id={key}
        />
      ));
    }
    return <p className="text-[2rem] font-bold">No books to display</p>;
  };

  return (
    <div className="bg-[#fafafa] mt-[2.5rem] pb-[2.5rem] border-b-2 max-h-[60vh] overflow-y-scroll">
      <div className="flex flex-col gap-[1rem]">
        {books ? listify(books) : 'Loading...'}
      </div>
    </div>
  );
};

export default BookList;
