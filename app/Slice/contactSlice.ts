import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Contact {
  _id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

interface ContactState {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
}

const initialState: ContactState = {
  contacts: [],
  loading: false,
  error: null,
};

// Define your API endpoint
const API_ENDPOINT = 'https://wardrobewizard.onrender.com/api/contact/getAllContacts';

// Create async thunk for fetching contacts
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const response = await axios.get<Contact[]>(API_ENDPOINT);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch contacts');
  }
});

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    // Additional reducers can go here if needed
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch contacts';
      });
  },
});

export default contactSlice.reducer;
