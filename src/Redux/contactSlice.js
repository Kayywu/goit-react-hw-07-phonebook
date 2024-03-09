import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  const response = await fetch('https://65b2a9f49bfb12f6eafe418a.mockapi.io/contacts/contacts');
  const data = await response.json();
  return data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
    const response = await fetch('https://65b2a9f49bfb12f6eafe418a.mockapi.io/contacts/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });
    const data = await response.json();
    return data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId) => {
    await fetch(`https://65b2a9f49bfb12f6eafe418a.mockapi.io/contacts/contacts/${contactId}`, {
      method: 'DELETE',
    });
    return contactId;
  }
);

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [],
    filter: '',
    status: 'idle',
    error: null,
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.list = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.list = state.list.filter((contact) => contact.id !== action.payload);
      });
  },
});

export const { setFilter } = contactSlice.actions;
export default contactSlice.reducer; 