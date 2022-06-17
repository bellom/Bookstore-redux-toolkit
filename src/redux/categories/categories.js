import { createSlice } from '@reduxjs/toolkit';

const categories = createSlice({
  name: 'categories',
  initialState: [],
  reducers: { checkStatus: () => 'Under construction' },
});
export const { checkStatus } = categories.actions;
export default categories.reducer;
