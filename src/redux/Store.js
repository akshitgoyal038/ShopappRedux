import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./slice/cartslice";



export const Store=configureStore({
    reducer:{
        cart:cartslice
    }
})