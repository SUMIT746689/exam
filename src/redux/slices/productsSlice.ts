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
  name: "products",
  initialState: {
    value:0
  },
  reducers: {
  // manage/control the currIndex value
    changeCurrIndex: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    increment: (state,action)=>{
      console.log({state,action})
      state.value += 1 
    }
  },
});

// Action creators are generated for each case reducer function
export const { changeCurrIndex, increment } = ProductSlice.actions;

export default ProductSlice.reducer;