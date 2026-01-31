import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
name:'auth',
initialState:{
    user:null, //user info
    token:null, //JWT token
    isAuthenticated:false,
    loading:false,
    error:null
},
reducers:{
    // Login action
    loginStart:(state,action)=>{
        state.loading = true;
        state.error = null;
    },
    loginSuccess:(state,action)=>{
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.loading = false;
        state.error = null;
    },
     loginFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = action.payload;
    },

    // Signup action
     signupStart:(state,action)=>{
        state.loading = true;
        state.error = null;
    },
    signupSuccess:(state,action)=>{
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.loading = false;
        state.error = null;
    } ,
     signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Logout action
    logout:(state,action)=>{
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;
        state.loading = false;
        
    },

    // Update user 
    updateUser:(state,action)=>{
        state.user = {...state.user,...action.payload};
    },

    // replace user object
    setUser:(state,action)=>{
        state.user = action.payload;  
    },

    // Update token
    updateToken: (state, action) => {
      state.token = action.payload;
    },

    // Clear error
    clearError: (state) => {
      state.error = null;
    },

}
})

export default slice.reducer;
export const {loginSuccess,loginStart,loginFailure,signupStart,signupSuccess,signupFailure} = slice.actions;