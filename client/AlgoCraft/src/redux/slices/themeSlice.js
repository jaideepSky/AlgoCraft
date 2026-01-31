import { createSlice } from "@reduxjs/toolkit";

const getTheme = ()=>{
    const savedTheme = localStorage.getItem('theme')
    return savedTheme
}

const slice = createSlice({
    name:'theme',
    initialState:getTheme() || 'light',
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