import { createSlice } from "@reduxjs/toolkit";
import {ordered as cakeOrdered } from "../cake/cakeSlice.js";

const initialState = {
    numOfIceCreams: 10
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--
        },
        restocked: (state, action) => {
            state.numOfIceCreams += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, state => {
            state.numOfIceCreams--
        })
    }
})

export default iceCreamSlice.reducer
export const { ordered, restocked } = iceCreamSlice.actions
