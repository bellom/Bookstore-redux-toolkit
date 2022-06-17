import { createSlice } from '@reduxjs/toolkit';

const books = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => [...state, action.payload],
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload),
  },
});
export const { addBook, removeBook } = books.actions;
export default books.reducer;
