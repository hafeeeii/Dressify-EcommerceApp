import { Product } from "@/lib/utils/types";
import { createSlice } from "@reduxjs/toolkit";

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
        state.filteredProducts = [...state?.products]?.filter((product) => {
          const subCategory = product?.attributes?.sub_categories?.data;
          return subCategory?.some(
            (category) => category?.attributes?.title === state?.filters
          );
        });
      }
    },
    handleAvailabilityFilter: (state, action) => {
      state.filteredProducts = [...state?.products]?.filter((product) => {
        return product?.attributes?.availability === action?.payload;
      });
    },

    handleSort: (state, action) => {
      const sort = action?.payload;

      if (sort) {
        const sorted = [...state.filteredProducts]?.sort((a, b) => {
          if (sort === "price-asc") {
            return a?.attributes?.price - b?.attributes?.price || 0;
          } else if (sort === "price-desc") {
            return b?.attributes?.price - a?.attributes?.price || 0;
          } else if (sort === "name-asc") {
            return a?.attributes?.title?.localeCompare(b?.attributes?.title);
          } else {
            return b?.attributes?.title?.localeCompare(a?.attributes?.title);
          }

          return 0;
        });

        state.filteredProducts = sorted || [];
      }
    },
  },
});
export const {
  handleCategoryFilter,
  handleAvailabilityFilter,
  handleProducts,
  handleSort,
} = productSlice.actions;
export default productSlice.reducer;
