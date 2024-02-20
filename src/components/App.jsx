import React, { useEffect, useRef } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { setContacts } from '../Redux/contactSlice';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.list);

  const isMounted = useRef(true);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      dispatch(setContacts(JSON.parse(storedContacts)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = false;
    } else {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);


  return (
    <div className="appContainer">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;