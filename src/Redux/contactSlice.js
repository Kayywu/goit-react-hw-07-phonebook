import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await fetch('https://65b2a9f49bfb12f6eafe418a.mockapi.io/contacts/contacts');
  const data = await response.json();
  return data;
});


const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [],
    filter: '',
  },
  reducers: {
    setContacts: (state, action) => {
      state.list = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    addContact: (state, action) => {
      state.list.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.list = state.list.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { setContacts, setFilter, addContact, deleteContact } = contactSlice.actions;
export default contactSlice.reducer; 