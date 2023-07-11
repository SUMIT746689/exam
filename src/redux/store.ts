import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './slices/productsSlice';
import { productApi } from './apis/api';

const store = configureStore({
  reducer: {
    products: productsSlice,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
});

export default store;