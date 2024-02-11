import {createSlice} from '@reduxjs/toolkit';

const initialstate = {
  Value: 0,
};

const counterSlice = createSlice({
  name: 'counterSlice',
  initialstate,
  reducer: {
    increment: state => {
      state.Value += 1;
    },
    decrement: state => {
      state.Value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.Value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
