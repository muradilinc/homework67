import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CalculatorState {
  firstNumber: string;
  secondNumber: string;
  showNumbers: string;
  operator: string;
  memberNumbers: boolean;
  memberAction: boolean;
  common: number;
}

const initialState: CalculatorState = {
  firstNumber: '',
  secondNumber: '',
  showNumbers: '',
  operator: '',
  memberNumbers: false,
  memberAction: false,
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
      state.operator = '';
      state.common = 0;
    },
    setAction: (state, action: PayloadAction<string>) => {
      if (state.operator && state.memberNumbers) {
        CalculatorSlice.caseReducers.calculate(state);
        state.showNumbers = state.common.toString();
        state.firstNumber = state.common.toString();
      } else {
        state.showNumbers = '';
      }

      state.operator = action.payload;
      state.memberNumbers = true;
      state.memberAction = true;
    },
    setNumbers: (state, action: PayloadAction<string>) => {
      state.showNumbers = state.showNumbers + action.payload;
      if (state.memberNumbers){
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
  setAction,
  calculate,
  clear,
} = CalculatorSlice.actions;