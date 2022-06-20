import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: 'action',
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
      category: 'action',
      item_id: Math.floor(Math.random() * 100),
    });
    document.getElementById('bookForm').reset();
  };

  return (
    <div>
      <h2> Form to Add New Book</h2>

      <form className="form" id="bookForm">
        <input
          type="text"
          name="title"
          placeholder="Book Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          id="author"
          placeholder="Author"
          onChange={handleChange}
          required
        />
        <select
          id="categories"
          name="category"
          onChange={handleChange}
          placeholder="Category"
          required
        >
          {dropdownOptions}
        </select>

        <button type="submit" onClick={handleSubmit}>
          Add a Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
