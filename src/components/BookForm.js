import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: 'Action',
    item_id: Math.floor(Math.random() * 1000),
  });
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const dropdownOptions = categories.map((category) => (
    <option
      key={categories.indexOf(category)}
      value={category}
    >
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
    dispatch(addBook(newBook));
    setNewBook({
      title: '',
      author: '',
      category: 'Action',
      item_id: Math.floor(Math.random() * 100),
    });
    document.getElementById('bookForm').reset();
  };

  return (
    <div>
      <h2> Form to Add New Book</h2>

      <form className="form" id="bookForm">
        <input type="text" name="title" placeholder="Book Name" onChange={handleChange} />
        <select id="categories" name="category" onChange={handleChange}>
          {dropdownOptions}
        </select>
        <input type="text" name="author" id="author" placeholder="Author" onChange={handleChange} />

        <button type="submit" onClick={handleSubmit}>Add a Book</button>
      </form>
    </div>
  );
};

export default BookForm;
