import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};
export const PopupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setToggle: (state, action) => {
      state.toggle = action.payload;
    },
  },
});

export const { setToggle } = PopupSlice.actions;
export default PopupSlice.reducer;
