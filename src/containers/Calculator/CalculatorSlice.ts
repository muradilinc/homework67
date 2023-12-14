import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CalculatorState {
  firstNumber: string;
  secondNumber: string;
  showNumbers: string;
  operator: string;
  currentOperator: string;
  memberNumber: boolean;
  common: number;
}

const initialState: CalculatorState = {
  firstNumber: '',
  secondNumber: '',
  showNumbers: '',
  operator: '',
  currentOperator: '',
  memberNumber: false,
  common: 0,
};

export const CalculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    calculate: (state) => {
      switch(state.operator){
        case '+':
          state.common = parseInt(state.firstNumber) + parseInt(state.secondNumber);
          state.showNumbers = state.common.toString();
          state.firstNumber = state.common.toString();
          state.operator = '';
          break;
        case '-':
          state.common = parseInt(state.firstNumber) - parseInt(state.secondNumber);
          state.showNumbers = state.common.toString();
          state.firstNumber = state.common.toString();
          state.operator = '';
          break;
        case '*':
          state.common = parseInt(state.firstNumber) * parseInt(state.secondNumber);
          state.showNumbers = state.common.toString();
          state.firstNumber = state.common.toString();
          state.operator = '';
          break;
        case '/':
          state.common = parseInt(state.firstNumber) / parseInt(state.secondNumber);
          state.showNumbers = state.common.toString();
          state.firstNumber = state.common.toString();
          state.operator = '';
          break;
        default:
          break;
      }

      state.secondNumber = '';
    },
    clear: (state) => {
      state.firstNumber = '';
      state.secondNumber = '';
      state.showNumbers = '';
      state.operator = '';
      state.common = 0;
    },
    setOperator: (state, action: PayloadAction<string>) => {
      state.operator = action.payload;
      if (state.operator){
        state.memberNumber = true;
        state.showNumbers = '';
      }
    },
    setNumbers: (state, action: PayloadAction<string>) => {
      state.showNumbers = state.showNumbers + action.payload;

      if (state.memberNumber){
        state.secondNumber = state.secondNumber + action.payload;
      } else {
        state.firstNumber = state.firstNumber + action.payload;
      }
    },
  }
});

export const calculatorReducer = CalculatorSlice.reducer;
export const {
  setNumbers,
  setOperator,
  calculate,
  clear,
} = CalculatorSlice.actions;