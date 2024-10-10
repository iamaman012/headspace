import { configureStore } from "@reduxjs/toolkit";
import meditateReducer from "./reducers/meditateReducer";

const store = configureStore({
    reducer:{
        meditate:meditateReducer
    }
})

export default store;