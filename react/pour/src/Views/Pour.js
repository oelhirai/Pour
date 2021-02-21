import React, { useState } from "react";
import Sesh from "../Components/Sesh";
import Step from "../Components/Step";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { usePourSession } from "../Hooks/usePourSession";

const Pour = () => {
  const [pourIndex, setPourIndex] = useState(0);
  const [weight, setWeight] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const nextPourIndex = pourIndex + 1;
  const { coffeeWeight } = useParams();
  const { totalWaterWeight, pours } = usePourSession(coffeeWeight);

  const isValidPour = index => {
    return index < pours.length;
  };

  const updatePour = () => {
    if (isValidPour(nextPourIndex)) {
      setWeight(weight + pours[pourIndex]);
      setPourIndex(nextPourIndex);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col p-3">
        <Sesh
          isActive={isActive}
          coffeeWeight={coffeeWeight}
          waterWeight={totalWaterWeight}
        />
        <Step
          step={nextPourIndex} // nextPourIndex reflects non 0-indexed step
          targetSteps={pours.length}
          weight={pours[pourIndex]}
          targetWeight={weight + pours[pourIndex]}
        />
      </div>
      <div className="absolute bottom-0 w-full flex flex-row justify-evenly">
        <Link
          to="/"
          className="w-1/4 p-3 my-4 bg-gray-400 rounded-md text-white text-center"
        >
          Setup
        </Link>
        <div
          onClick={updatePour}
          className="w-1/2 p-3 my-4 bg-blue-400 rounded-md text-white text-center"
        >
          {isValidPour(nextPourIndex) ? "Next" : "Stop"}
        </div>
      </div>
    </div>
  );
};

export default Pour;
