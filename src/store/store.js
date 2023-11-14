import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer,
    }
})

export default store