import {configureStore} from '@reduxjs/toolkit';
import {safeReducer} from '../containers/SafePage/SafeSlice';
import {calculatorReducer} from '../containers/Calculator/CalculatorSlice';

export const store = configureStore({
  reducer: {
    safe: safeReducer,
    calculator: calculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;