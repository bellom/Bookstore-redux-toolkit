import { createSlice } from '@reduxjs/toolkit';

const categories = createSlice({
  name: 'categories',
  intialState: [],
  reducers: { checkStatus: () => 'Under construction' },
});
export const { checkStatus } = categories.actions;
export default categories.reducer;
