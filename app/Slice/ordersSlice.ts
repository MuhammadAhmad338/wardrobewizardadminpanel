
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Order {
  _id: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  paymentMethod: string;
  country: string;
}

interface OrderState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: null,
};

// Define your API endpoint
const API_ENDPOINT = 'https://wardrobewizard.onrender.com/api';

// Create async thunk for fetching orders
export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  try {
    const response = await axios.get<Order[]>(API_ENDPOINT);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch orders');
  }
});

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // Additional reducers can go here if needed
  },
  extraReducers: builder => {
    builder
      .addCase(fetchOrders.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Failed to fetch orders';
      });
  },
});

export default orderSlice.reducer;
