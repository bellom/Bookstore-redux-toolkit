import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const response = await axios.get(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/T5yDKvYlzHqU7LLRFPaT/books',
    );
    return response.data;
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (book, thunkAPI) => {
    const response = await axios.post(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/T5yDKvYlzHqU7LLRFPaT/books',
      book,
    );
    thunkAPI.dispatch(getBooks());
    return response.data;
  },
);

export const removeBook = createAsyncThunk(
  'books/addBook',
  async (id, thunkAPI) => {
    const response = await axios.delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/T5yDKvYlzHqU7LLRFPaT/books/${id}`,
    );
    thunkAPI.dispatch(getBooks());
    return response.data;
  },
);

export const books = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    clearState: (state) => (state),
  },
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => [action.payload],
    [getBooks.rejected]: (action) => action.payload,
    [addBook.fulfilled]: (state) => state,
    [addBook.rejected]: (state) => state,
    [removeBook.fulfilled]: (state) => state,
    [removeBook.rejected]: (state) => state,
  },
});

export const booksSelector = (state) => state;
