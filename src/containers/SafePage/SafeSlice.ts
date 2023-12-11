import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {password} from '../../constansts/password';

interface SafeState {
  password: number[];
  status: string;
}

const initialState: SafeState = {
  password: [],
  status: 'pending',
};

export const SafeSlice = createSlice({
  name: 'safe',
  initialState,
  reducers: {
    changePassword: (state, action: PayloadAction<number>) => {
      if (state.password.length < 4) {
        state.password.push(action.payload);
      }
    },
    clearPassword: (state) => {
      state.status = 'pending';
      state.password = [];
    },
    removePassword: (state) => {
      state.password.pop();
    },
    checkPassword: (state) => {
      if (state.password.join('') === password){
        state.status = 'success';
        state.password = [];
        setTimeout(() => {
          state.status = 'pending';
          state.password = [];
        }, 3000);
      } else {
        state.status = 'unsuccessful';
        state.password = [];
        setTimeout(() => {
          state.status = 'pending';
          state.password = [];
        }, 3000);
      }
    },
  }
});

export const safeReducer = SafeSlice.reducer;
export const {
  changePassword,
  removePassword,
  checkPassword,
  clearPassword,
} = SafeSlice.actions;