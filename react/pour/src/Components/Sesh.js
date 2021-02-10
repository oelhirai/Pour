import React from "react";
import Timer from "./Timer";

function Sesh(props) {
  return (
    <div className="mb-4 text-4xl text-right">
      <Timer isActive={props.isActive} />
      <p>
        Coffee <b>{props.coffeeWeight}g</b>
      </p>
      <p>
        Water <b>{props.waterWeight}g</b>
      </p>
    </div>
  );
}

export default Sesh;
