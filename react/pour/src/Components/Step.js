import React from "react";

function Step(props) {
  return (
    <div className="mb-4 text-5xl">
      <p>
        Step <b>{props.step}/4</b>
      </p>
      <p>
        Pour <b>{props.weight}g</b>
      </p>
      <p>
        To reach <b>{props.targetWeight}g</b>
      </p>
    </div>
  );
}

export default Step;
