import { createSlice } from "@reduxjs/toolkit";

type SomeObjectType = {
  id: number;
  img: string;
  img2: string;
  title: string;
  oldPrice: number;
  price: number;
  isNew: boolean;
  quantity: number;
};

type InitialType = {
  data: SomeObjectType[];
  sortBy: string;
  selectedCategory: string;
};

const initialState: InitialType = {
  data: [],
  sortBy: "",
  selectedCategory: "",
};

const filterSortSlice = createSlice({
  name: "filterSort",
  initialState,
  reducers: {
    
  },
});
