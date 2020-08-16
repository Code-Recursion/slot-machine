import React from "react";
import Slots from "./SlotMachine";

const App = () => {
  return (
    <>
      <h1 className="heading" style={{ color: "red" }}>
        {" "}
        🎰 Slot Machine 🎰{" "}
      </h1>
      <div className="slot">
        {" "}
        <Slots x={"😊"} y={"😊"} z={"😊"} />
        <Slots x={"😻 "} y={"😊"} z={"😊"} />
        <Slots x={"😊"} y={"😻 "} z={"🦇  "} />
        <Slots x={"😊"} y={"😻 "} z={"🦇  "} />
        <Slots x={"😊"} y={"😻 "} z={"🦇  "} />
        <Slots x={"😊"} y={"😊"} z={"😊"} />
        <Slots x={"😊"} y={"😊"} z={"😊"} />
        <Slots x={"😊"} y={"😍  "} z={"🛬 "} />
        <Slots x={"😻"} y={"😻"} z={"😻"} />
      </div>
    </>
  );
};

export default App;
