import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './slices/themeSlice.js'
import authSlice from './slices/authSlice.js'
const store = configureStore({
    reducer:{
        theme:themeSlice,
        auth:authSlice,
    }
})

export default store;