import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../Redux/contactSlice';

import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      className={styles.searchInput}
      placeholder="Search contacts..."
    />
  );
};

export default Filter;