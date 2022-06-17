import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { title, author, id } = props;
  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="book">
      <div>
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
      <div className="btn-remove">
        <button type="button" onClick={() => { handleRemoveBook(id); }}>Remove</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
