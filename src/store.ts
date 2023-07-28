import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: rootReducer
});