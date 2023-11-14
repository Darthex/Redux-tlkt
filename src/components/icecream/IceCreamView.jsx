import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice.js";

export default function IceCreamView() {

    const [restockValue, setRestockValue] = React.useState(1)

    const numberOfIceCreams =useSelector((state) => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()

    function handleValueChange(e) {
        setRestockValue(parseInt(e.target.value))
    }

    return(
        <div>
            <h2>Number of Ice-Creams - {numberOfIceCreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order Ice-Cream</button>
            <input type="number" value={restockValue} onChange={(e) => handleValueChange(e)}/>
            <button onClick={() => dispatch(restocked(restockValue))}>Restock Ice-Cream</button>
        </div>
    )
}
