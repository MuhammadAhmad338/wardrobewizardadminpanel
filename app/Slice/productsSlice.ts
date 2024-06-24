import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductInfo {
    material: string;
    features: string;
    fitDescription: string;
    additionalDetails: string;
}
  
export interface Product {
    _id: string;
    name: string;
    price: number;
    description: string;
    sizes: string[];
    images: string[];
    productInfo: ProductInfo;
    createdAt: string;
    updatedAt: string;
}

interface ProductState {
    products: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    status: 'idle',
    error: null,
}

const API_ENDPOINT = 'https://wardrobewizard.onrender.com/getProducts';

// Create async thunk for fetching contacts
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
      const response = await axios.get<Product[]>(API_ENDPOINT);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch contacts');
    }
});

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, state => {
            state.status = "loading";
            state.error = null;
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.error = null;
            state.products = action.payload;
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message ?? 'Failed to fetch orders';
          });  
        }
});


export default productsSlice.reducer;
