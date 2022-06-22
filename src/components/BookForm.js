import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: 'Action',
    item_id: Math.floor(Math.random() * 1000),
  });
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  const dropdownOptions = categories.map((category) => (
    <option key={categories.indexOf(category)} value={category}>
      {category}
    </option>
  ));
  const handleChange = ({ target: { name, value } }) => {
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newBook.title && newBook.author && newBook.category) {
      dispatch(addBook(newBook));
    }
    setNewBook({
      title: '',
      author: '',
      category: 'Action',
      item_id: Math.floor(Math.random() * 100),
    });
    const bookForm = ref.current;
    bookForm.reset();
  };

  return (
    <div className="py-10 bg-[#fafafa]">
      <h2 className="uppercase opacity-50 text-[1.25rem] mb-5">Add new book</h2>

      <form ref={ref} className="flex justify-between" id="bookForm">
        <input
          type="text"
          name="title"
          placeholder="Book Name"
          onChange={handleChange}
          className="h-[2.8rem] w-[25rem] mb-5 pl-5"
          required
        />
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Author"
          onChange={handleChange}
          className="h-[2.8rem] w-[25rem] mb-5 pl-5"
          required
        />
        <select
          id="categories"
          name="category"
          onChange={handleChange}
          placeholder="Category"
          className="h-[2.8rem] w-[15rem] mb-5 pl-5"
          required
        >
          {dropdownOptions}
        </select>

        <button type="submit" onClick={handleSubmit} className="uppercase bg-[#0290ff] w-[11.5rem] h-[2.8rem] text-white">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
