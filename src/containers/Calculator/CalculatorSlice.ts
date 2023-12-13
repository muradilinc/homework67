import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CalculatorState {
  firstNumber: string;
  secondNumber: string;
  showNumbers: string;
  typeAction: string;
  memberNumbers: boolean;
  memberAction: boolean;
  common: number;
}

const initialState: CalculatorState = {
  firstNumber: '',
  secondNumber: '',
  showNumbers: '',
  typeAction: '',
  memberNumbers: false,
  memberAction: false,
  common: 0,
};

export const CalculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    calculate: (state) => {
      switch(state.typeAction){
        case '+':
          state.common = parseInt(state.firstNumber) + parseInt(state.secondNumber);
          state.showNumbers = state.common.toString();
          break;
        case '-':
          state.common = parseInt(state.firstNumber) - parseInt(state.secondNumber);
          state.showNumbers = state.common.toString();
          break;
        case '*':
          state.common = parseInt(state.firstNumber) * parseInt(state.secondNumber);
          state.showNumbers = state.common.toString();
          break;
        case '/':
          state.common = parseInt(state.firstNumber) / parseInt(state.secondNumber);
          state.showNumbers = state.common.toString();
          break;
        default:
          break;
      }

      state.memberNumbers = false;
      state.memberAction = false;
      state.firstNumber = '';
      state.secondNumber = '';
    },
    clear: (state) => {
      state.firstNumber = '';
      state.secondNumber = '';
      state.showNumbers = '';
      state.typeAction = '';
      state.common = 0;
    },
    setAction: (state, action: PayloadAction<string>) => {

      state.typeAction = action.payload;
      state.showNumbers = '';
      state.memberNumbers = true;
      // state.memberAction = true;
    },
    setNumbers: (state, action: PayloadAction<string>) => {
      state.showNumbers = state.showNumbers + action.payload;
      if (state.memberNumbers){
        state.secondNumber = state.secondNumber + action.payload;
      } else {
        state.firstNumber = state.firstNumber + action.payload;
      }

      // if (state.memberAction){
      //   state.firstNumber = state.common.toString();
      // }
    },
  }
});

export const calculatorReducer = CalculatorSlice.reducer;
export const {
  setNumbers,
  setAction,
  calculate,
  clear,
} = CalculatorSlice.actions;