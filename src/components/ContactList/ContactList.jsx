import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, deleteContact } from '../../Redux/contactSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.list);
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
       <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter contacts..."
      />
  <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={styles.contactItem}>
            {contact.name}: {contact.number}
            <button className={styles.deleteButton} onClick={() => handleDeleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;