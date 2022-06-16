import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="book">
      <div>
        <h2>{title}</h2>
        <h3>{author}</h3>
      </div>
      <div className="btn-remove">
        <button type="button">Remove</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
