import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '../Slice/ordersSlice';
import contactReducer from '../Slice/contactSlice';
import productsReducer from '../Slice/productsSlice';

export const store = configureStore({
    reducer: {
        order: orderReducer,
        contact: contactReducer,
        product: productsReducer
    },
  });
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  