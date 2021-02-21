import React, { useState } from "react";
import { Basic } from "react-dial-knob";
import { Link } from "react-router-dom";

const Configure = () => {
  const [desiredCoffeeWeight, setDesiredCoffeeWeight] = useState(15);

  return (
    <div className="flex flex-col justify-center items-center">
      <label className="mb-4 text-2xl text-center">
        How much coffee you got? (in grams)
      </label>
      <Basic
        diameter={200}
        min={12}
        max={50}
        step={1}
        value={desiredCoffeeWeight}
        theme={{
          defaultColor: "#333",
          activeColor: "#f33"
        }}
        onValueChange={setDesiredCoffeeWeight}
      />
      <Link
        to={`/pour/${desiredCoffeeWeight}`}
        className="absolute bottom-0 left-1/4 w-1/2 p-4 my-4 bg-blue-400 rounded-md text-white text-center"
      >
        Start
      </Link>
    </div>
  );
};

export default Configure;
