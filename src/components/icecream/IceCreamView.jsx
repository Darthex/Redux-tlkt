import React from "react";
import { useSelector } from "react-redux";

export default function IceCreamView() {
    const numberOfIceCreams =useSelector((state) => state.iceCream.numOfIceCreams)
    return(
        <div>
            <h2>Number of Ice-Creams - {numberOfIceCreams}</h2>
            <button>Order Ice-Cream</button>
            <button>Restock Ice-Cream</button>
        </div>
    )
}
