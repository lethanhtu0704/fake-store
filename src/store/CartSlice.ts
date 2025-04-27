import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  CartItemModel, CartModel } from "../types/cart";
import axiosInstance from "../configs/axios";
import { hideLoading, showLoading } from "./StylingSlice";

const getLocalStorage = () : CartItemModel[] => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState : CartModel = {
  cart: getLocalStorage(),
  total__item: 0,
  total__amount: 0,
  shippingFee: 1000,
};



export const getCart = createAsyncThunk<CartModel, void>('cart/getCart', async (_, thunkAPI) => {
  try {
    thunkAPI.dispatch(showLoading());
    const response = await axiosInstance.get('/cart.json')
    thunkAPI.dispatch(hideLoading());
    return response.data
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    throw error // Rethrow error to let createAsyncThunk handle it
  }
})

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart : (state,action) =>{
      const { amountCart, products, mainColor, id } = action.payload;
      const tempItem = state.cart.find((item) => {
        return item.id === id + mainColor;
      });
      if(tempItem){
        tempItem.item = tempItem.item  + amountCart;
        if (tempItem.item  > tempItem.max) {
          tempItem.item  = tempItem.max;
        }
      }else{
        state.cart.push({
          id : id+ mainColor,
          color: mainColor,
          image:products.images[0].url,
          name: products.name,
          price: products.price,
          item: amountCart,
          max: products.stock,
        }) 
      }
    },
    decreaseProduct: (state,action) =>{
      const { id } = action.payload;
      const tempItem = state.cart.find((item) => {
        return item.id === id ;
      });
      if(tempItem && tempItem.item > 1){
        tempItem.item --
      }else{
        state.cart = state.cart.filter((item) => {
          return item.id !== id ;
        });
      }
    },
    updateCartTotal : (state) =>{
      state.total__amount = state.cart.reduce((accumulator, currentValue) => {
        return accumulator + (currentValue.price * currentValue.item);
      }, 0);
    },
    clearCart : (state) => {
      state.cart = []
      state = initialState
     
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action: PayloadAction<CartModel>) => {  
      state.cart = action.payload.cart;
      state.shippingFee = action.payload.shippingFee;
      state.total__amount = action.payload.total__amount;
      state.total__item = action.payload.total__item;
    })
  }
});

// Action creators are generated for each case reducer function
export const { addToCart,decreaseProduct,updateCartTotal,clearCart } = cartSlice.actions;

export default cartSlice.reducer;