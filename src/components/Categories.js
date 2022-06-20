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
      {status}
      <button
        className="text-[2rem] font-bold"
        type="button"
        onClick={() => handleCheckStatus()}
      >
        Check Status
      </button>
    </div>
  );
};

export default Categories;
