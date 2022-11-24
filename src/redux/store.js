import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../redux/weatherSlice'
import CartSlice from "./favouriteSlice";
import searchSlice from "./recSearchSlice"


const store = configureStore({
    reducer: {
        weatherReducer,
        cart: CartSlice,
        search: searchSlice,
    }
})

export default store;