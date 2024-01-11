import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import wishListSlice from "./slices/wishListSlice";
import quickViewSlice from "./slices/quickViewSlice";
import compareSlice from "./slices/compareSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cartSlice", "wishListSlice", "compareSlice"],
};
const reducers = combineReducers({
  cartSlice,
  wishListSlice,
  quickViewSlice,
  compareSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
