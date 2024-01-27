import Category from "@/components/Category";
import { Product } from "@/lib/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ProductInitialType = {
  products: Product[];
  filteredProducts: Product[];
  filters: string;
  sort: string;
};
const initialState: ProductInitialType = {
  products: [],
  filteredProducts: [],
  filters: "",
  sort: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    handleProducts: (state, action) => {
      state.products = action?.payload;
      state.filteredProducts = state?.products;
    },
    handleCategoryFilter: (state, action) => {
      state.filters = action?.payload;
      if (state?.filters === "all") {
        state.filteredProducts = state?.products;
      } else {
        state.filteredProducts = state?.products?.filter((product) => {
          const subCategory = product?.attributes?.sub_categories?.data;
          return subCategory?.some(
            (category) => category?.attributes?.title === state?.filters
          );
        });
      }
    },
    handleAvailabilityFilter: (state, action) => {
      const filterCondition = action?.payload;
      state.filteredProducts = state?.products?.filter((product) => {
        return product?.attributes?.availability === action?.payload;
      });
    },
  },
});

export const {
  handleCategoryFilter,
  handleAvailabilityFilter,
  handleProducts,
} = productSlice.actions;
export default productSlice.reducer;
