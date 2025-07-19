import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
  filters: filterReducer
});

export default rootReducer;