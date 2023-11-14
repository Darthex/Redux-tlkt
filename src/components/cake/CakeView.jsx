import React from "react";
import { useSelector } from "react-redux";

export default function CakeView() {
    const numberOfCakes =useSelector((state) => state.cake.numOfCakes)
    return(
        <div>
            <h2>Number of cakes - {numberOfCakes}</h2>
            <button>Order cake</button>
            <button>Restock cakes</button>
        </div>
    )
}