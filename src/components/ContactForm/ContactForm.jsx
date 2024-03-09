import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
/*import { nanoid } from 'nanoid'; */
import { addContact } from '../../Redux/contactSlice';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        className={styles.inputField}
        placeholder="Enter name"
        required
      />
      <input
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        className={styles.inputField}
        placeholder="Enter phone number"
        required
      />
      <button type="submit" className={styles.submitButton}>Add contact</button>
    </form>
  );
};

export default ContactForm;