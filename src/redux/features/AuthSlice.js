import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {API} from '../../api';

const initialState = {
  userData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const login = createAsyncThunk('login', async (params, thunkApi) => {
  try {
    const response = await API.post('auth/login', params);
    return response.data;
  } catch (e) {
    console.log(e);
    return thunkApi.rejectWithValue(e);
  }
});

const AuthSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    }),
      builder.addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userData = action.payload;
      }),
      builder.addCase(login.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default AuthSlice.reducer;
