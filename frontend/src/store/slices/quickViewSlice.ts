import { Product } from "@/lib/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type IntialStateType = {
  data: Product[];
  isClicked: boolean;
};

const initialState: IntialStateType = {
  data: [],
  isClicked: false,
};

const quickViewSlice = createSlice({
  name: "quickView",
  initialState,
  reducers: {
    popOverData: (state, action: PayloadAction<Product>) => {
      state.data.push(action.payload);
      state.isClicked = true;
    },
    clearData: (state) => {
      state.data = [];
      state.isClicked = false;
    },
  },
});

export const { popOverData, clearData } = quickViewSlice.actions;
export default quickViewSlice.reducer;
