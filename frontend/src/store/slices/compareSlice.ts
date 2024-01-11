import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SomeObjectType } from "./cartSlice";

type InitialState = {
  itemData: SomeObjectType[];
};

const initialState: InitialState = {
  itemData: [],
};

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompare: (state, action: PayloadAction<SomeObjectType>) => {
      const { id } = action.payload;

      const doesItemExist = state.itemData?.find((item) => item.id === id);
      if (!doesItemExist) {
        state.itemData = [...state.itemData, action.payload];
      }
    },
    removeFromCompare: (state, action: PayloadAction<SomeObjectType>) => {
      const { id } = action.payload;

      state.itemData = state.itemData?.filter((item) => item.id !== id);
    },
  },
});

export const { addToCompare, removeFromCompare } = compareSlice.actions;
export default compareSlice.reducer;
