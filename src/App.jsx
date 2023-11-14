import React from "react";
import CakeView from "./components/cake/CakeView.jsx";
import IceCreamView from "./components/icecream/IceCreamView.jsx";
import UserView from "./components/user/UserView.jsx";

export default function App() {
  return (
    <div className="app">
        <CakeView />
        <IceCreamView />
        <UserView />
    </div>
  )
}
