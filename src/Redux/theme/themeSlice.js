import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: 'black', 
  reducers: {
    toggleTheme: (state) => {
      switch (state) {
        case 'black':
          return 'white';
        case 'white':
          return 'blur';
        case 'blur':
          return 'black';
        default:
          return 'black';
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;