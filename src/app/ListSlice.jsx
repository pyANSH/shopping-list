import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopList: [
    {
      id: 1,
      shopName: "sweet shop",
      shopArea: "Solapur",
      Category: "Baker",
      openingDate: "2022-22-12",
      closingDate: "2023-01-01",
    },
    {
      id: 2,
      shopName: "sweet shop",
      shopArea: "Mumbai Suburban",
      Category: "Grocery",
      openingDate: "2022-12-01",
      closingDate: "2023-01-01",
    },
    {
      id: 3,
      shopName: "sweet shop",
      shopArea: "Pune",
      Category: "Chemist",
      openingDate: "2022-11-12",
      closingDate: "2023-01-01",
    },
    {
      id: 4,
      shopName: "sweet shop",
      shopArea: "Thane",
      Category: "Stationery shop",
      openingDate: "2022-12-01",
      closingDate: "2023-01-01",
    },
  ],

  count: 4,
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addItems: (state, action) => {
      state.shopList.push(action.payload);
      state.count = state.shopList.length;
    },
    removeItems: (state, action) => {
      state.shopList = state.shopList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addItems, removeItems } = listSlice.actions;
export default listSlice.reducer;
