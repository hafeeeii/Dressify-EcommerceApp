
import { Product } from "@/lib/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

 export type CartInitialType = {
  itemData: Product[];
  quantity: number;
};

const initialState: CartInitialType = {
  itemData: [],
  quantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const doesItemExist = state.itemData?.find(
        (item) => item.id === action.payload.id
      );
      if (!doesItemExist) {
        state.itemData.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;
      const doesItemExist = state.itemData.find((item) => item.id === id);
      if (doesItemExist) {
        state.itemData = state.itemData.filter((item) => item.id !== id);
      }
    },
    increment: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;
      const doesItemExist = state.itemData.find((item) => item.id === id);
      if (doesItemExist) {
        if (doesItemExist) {
          doesItemExist.attributes.quantity++;
        }
      }
    },
    decrement: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;
      const doesItemExist = state.itemData.find((item) => item.id === id);
      if (doesItemExist) {
        if (doesItemExist.attributes.quantity > 1) {
          doesItemExist.attributes.quantity--;
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;
export default cartSlice.reducer;
