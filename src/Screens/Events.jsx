import React from "react";
import NavBar from "./Components/NavBar";
const Events = () => {
  return (
    <div className="flex flex-col text-white h-screen w-full">
      <NavBar page={"events"} />
      <div className="flex flex-col h-screen w-full justify-center items-center">
        <h1 className="text-bold text-xl">Events Page Need to Code.</h1>
        <p>Edit /src/Screens/Events.jsx</p>
      </div>
    </div>
  );
};

export default Events;
