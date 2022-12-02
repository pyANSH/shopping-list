import { configureStore } from '@reduxjs/toolkit';
import ListSlice from './ListSlice';
import PopupSlice from './PopupSlice';

export const store = configureStore({
  reducer: {
    list: ListSlice,
    popup: PopupSlice,
  },
});
