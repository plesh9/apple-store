import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productsSlise from './features/products-slise';

export const store = configureStore({
  reducer: {
    products: productsSlise
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
