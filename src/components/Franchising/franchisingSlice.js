import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isValid: '',
    isSent: '',
    isInputEmpty: '',
}



const franchisingSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    setIsValid: (state, action) => action.payload,
    decrement: state => state - 1,
    incrementByAmount: (state, action) => state + action.payload,
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default franchisingSlice.reducer;
