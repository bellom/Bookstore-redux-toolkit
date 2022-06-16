import React from "react";

const BookForm = () => {
  return (
    <div>
      <h2> Form to Add New Book</h2>

      <form className="form">
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Author" />
        <button type="submit">Add a Book</button>
      </form>
    </div>
  );
};

export default BookForm;
