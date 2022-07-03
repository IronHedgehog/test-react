import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/all',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('products');
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const addToCart = createAsyncThunk(
  'product/addToCart',
  async (product, { rejectWithValue }) => {
    try {
      const products = await axios.post('withOwner', product);
      return products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);