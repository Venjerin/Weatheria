import { configureStore } from '@reduxjs/toolkit';
import {combineReducers } from "redux"

const rootReducer = combineReducers({
    // currentWeather: ,
})


const store = configureStore({reducer: rootReducer})

export default store