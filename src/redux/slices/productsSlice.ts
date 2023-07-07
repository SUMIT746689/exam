import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICar {
  data: any; // data stored from API
  currIndex: number; // current active car tab index
}

const initialState: ICar = {
  data: undefined,
  currIndex: 0,
};

// creating action-reducer slice
export const ProductSlice = createSlice({
  name: "products_slide",
  initialState,
  reducers: {
  // manage/control the currIndex value
    changeCurrIndex: (state, action: PayloadAction<number>) => {
      state.currIndex = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeCurrIndex } = ProductSlice.actions;

export default ProductSlice.reducer;