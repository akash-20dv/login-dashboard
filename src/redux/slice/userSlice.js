import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  axios  from 'axios';

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) => {
        const config = {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        const request = await axios.get('https://reqres.in/api/users', userCredentials,config);
        
        const response = await request.data.data;
        localStorage.setItem('user',JSON.stringify(response));
        console.log('user',response);
        return response;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState:{
        loading: false,
        user:null,
        error: null
    },
    extraReducers: (builder) => {
        builder
          .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.user = null;
            state.error = null;
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.user = null;
            state.error = action.error.message; // Set the error message
          });
      }
});

export default userSlice.reducer;
