
import { Product } from "@/lib/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialType = {
  wishListData: Product[];
};

const initialState: InitialType = {
  wishListData: [],
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<Product>) => {
      const doesItemExist = state.wishListData?.find(
        (item) => item.id === action.payload.id
      );
      if (!doesItemExist) {
        state.wishListData.push(action.payload);
      }
    },
    removeFromWishList: (state, action: PayloadAction<Product>) => {
      const { id }: Product = action.payload;
      if (id) {
        state.wishListData = state.wishListData.filter(
          (item: Product) => item.id !== id
        );
      }
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
