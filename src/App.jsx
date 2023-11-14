import React from "react";
import CakeView from "./components/cake/CakeView.jsx";
import IceCreamView from "./components/icecream/IceCreamView.jsx";

export default function App() {
  return (
    <div className="app">
        <CakeView />
        <IceCreamView />
    </div>
  )
}
