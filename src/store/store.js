import { configureStore } from "@reduxjs/toolkit";
import cakeReducer  from "../components/cake/cakeSlice.js";
import iceCreamReducer from "../components/icecream/iceCreamSlice.js";
import userReducer from "../components/user/userSlice.js"

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer,
    }
})

export default store