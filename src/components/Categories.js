import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div className="bg-[#fafafa] mt-[2.5rem] pb-[2.5rem]">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => handleCheckStatus()}
      >
        Check Status
      </button>
      <div className="text-[2rem] font-bold mt-8">{status}</div>
    </div>
  );
};

export default Categories;
