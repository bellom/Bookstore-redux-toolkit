import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    title, author, id, category,
  } = props;
  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div className="bg-white flex px-[1.68rem] justify-between items-center h-[10.625rem]">
      <div className="left-side flex flex-col gap-[1.3rem]">
        <div>
          <h3 className="opacity-50 text-[0.875rem]font-bold">{category}</h3>
          <h2 className="text-[1.375rem] font-bold">{title}</h2>
          <h3 className="text-[0.875rem] text-[#4386bf] font-light">
            {author}
          </h3>
        </div>
        <div className="btns flex gap-[1rem] text-[0.875rem] text-[#4386bf]">
          <button type="button" className="pr-[1rem] border-r-2">
            Comments
          </button>
          <button
            type="button"
            className="pr-[1rem] border-r-2"
            onClick={() => {
              handleRemoveBook(id);
            }}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="center-side flex items-center px-24 border-r-2">
        <div className="w-[4.25rem] mr-[1.3rem]">
          <CircularProgressbar value={64} />
        </div>
        <div className="">
          <div>
            <p className="text-[2rem]">64%</p>
            <p className="opacity-50">Completed</p>
          </div>
        </div>
      </div>
      <div className="right-side pr-32 flex flex-col">
        <p className="opacity-50 uppercase">Current Chapter</p>
        <p className="text-[1rem]">Chapter 9</p>
        <button type="submit" className="mt-[2rem] bg-[#0290ff] uppercase px-[1.75rem] py-[0.5rem] text-white text-[0.8rem]">
          Update Progress
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
