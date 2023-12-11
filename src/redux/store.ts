import {configureStore} from '@reduxjs/toolkit';
import {safeReducer} from '../containers/SafePage/SafeSlice';

export const store = configureStore({
  reducer: {
    safe: safeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;