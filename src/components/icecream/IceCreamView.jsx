import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice.js";

export default function IceCreamView() {
    const numberOfIceCreams =useSelector((state) => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
    return(
        <div>
            <h2>Number of Ice-Creams - {numberOfIceCreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order Ice-Cream</button>
            <button onClick={() => dispatch(restocked(5))}>Restock Ice-Cream</button>
        </div>
    )
}
