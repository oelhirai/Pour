import React, { useState } from "react";
import Sesh from "../Components/Sesh";
import Step from "../Components/Step";

function Pour(props) {
  const pours = props.session.pours;
  const [pourIndex, setPourIndex] = useState(0);
  const [weight, setWeight] = useState(0);
  const [isActive, setIsActive] = useState(true);

  var currentStep = pourIndex + 1;

  function isFinishedPouring(index) {
    return index === pours.length;
  }

  function updatePour() {
    var nextPourIndex = pourIndex + 1;
    if (isFinishedPouring(nextPourIndex)) {
      setIsActive(false);
    } else {
      setWeight(weight + pours[pourIndex]);
      setPourIndex(nextPourIndex);
    }
  }

  return (
    <div>
      <h5 className="p-3 text-3xl font-bold mb-4 mt-0">Pour</h5>
      <div className="flex flex-col p-3">
        <Sesh
          isActive={isActive}
          coffeeWeight={props.session.totalCoffeeWeight}
          waterWeight={props.session.totalWaterWeight}
        />
        <Step
          step={currentStep}
          targetSteps={pours.length}
          weight={pours[pourIndex]}
          targetWeight={weight + pours[pourIndex]}
        />
      </div>
      <div
        onClick={updatePour}
        className="absolute bottom-0 left-1/4 w-1/2 p-4 my-4 bg-blue-400 rounded-md text-white text-center"
      >
        {currentStep === pours.length ? "Stop" : "Next"}
      </div>
    </div>
  );
}

export default Pour;
