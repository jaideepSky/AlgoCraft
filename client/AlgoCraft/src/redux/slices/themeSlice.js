import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:'theme',
    initialState:'light',
    reducers:{
        darkMode:(state,action)=>{
            return state='dark'
        },
        lightMode:(state,action)=>{
            return state='light'
        }
    }
})
export  default slice.reducer;
export const {darkMode,lightMode} = slice.actions;