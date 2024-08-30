import { configureStore } from "@reduxjs/toolkit";
import { btShoeReducer } from "./BtShoe/slice";

export const store = configureStore({
    reducer:{
        btShoeReducer,
    }
})