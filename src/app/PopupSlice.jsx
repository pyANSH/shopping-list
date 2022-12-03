import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  editToggle: false,
  editId: -1,
};
export const PopupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setToggle: (state, action) => {
      state.toggle = action.payload;
    },
    setEditToggle: (state, action) => {
      state.editToggle = action.payload;
    },
    setEditId: (state, action) => {
      state.editId = action.payload;
    },
  },
});

export const { setToggle, setEditToggle, setEditId } = PopupSlice.actions;
export default PopupSlice.reducer;
