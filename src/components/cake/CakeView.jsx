import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked} from "./cakeSlice.js";

export default function CakeView() {
    const numberOfCakes =useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return(
        <div>
            <h2>Number of Cakes - {numberOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
        </div>
    )
}