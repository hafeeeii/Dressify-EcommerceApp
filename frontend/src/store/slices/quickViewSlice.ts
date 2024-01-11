import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SomeObjectType } from "./cartSlice";

type IntialStateType = {
  data: SomeObjectType[];
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
    popOverData: (state, action: PayloadAction<SomeObjectType>) => {
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
