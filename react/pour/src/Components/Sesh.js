import React from "react";
import Timer from "./Timer";

const Sesh = ({ isActive = false, coffeeWeight = 0, waterWeight = 0 }) => (
  <div className="mb-4 text-4xl text-right">
    <Timer isActive={isActive} />
    <p>
      Coffee <b>{coffeeWeight}g</b>
    </p>
    <p>
      Water <b>{waterWeight}g</b>
    </p>
  </div>
);

export default Sesh;
