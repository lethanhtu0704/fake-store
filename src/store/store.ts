import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./ProductSlice";
import stylingReducer from "./StylingSlice";
import cartReducer from "./CartSlice";
import authSlice from "./AuthSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  styling: stylingReducer,
  cart: cartReducer,
  auth: authSlice
});


export const store = configureStore({
  reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;