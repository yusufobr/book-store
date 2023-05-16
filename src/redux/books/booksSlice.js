import { createSlice } from '@reduxjs/toolkit';
import booksData from '../../data';

const initialState = {
  books: booksData,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    removeBook: (state, action) => {
      console.log('state', state.books);
      const bookId = action.payload;
      console.log('bookId', bookId);
      state.books = state.books.filter((item) => item.id !== bookId);
      //   state.books = [];
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
