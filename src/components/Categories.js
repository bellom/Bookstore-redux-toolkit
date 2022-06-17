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
    <div>
      {status}
      <button className="btn-check-status" type="button" onClick={handleCheckStatus()}>Check Status</button>
    </div>
  );
};

export default Categories;
