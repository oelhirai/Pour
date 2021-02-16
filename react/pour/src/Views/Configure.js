import React, { useState } from "react";
import { Basic } from "react-dial-knob";
import { usePourSession } from "../Hooks/usePourSession";

// TODO - Handle erroneous input, or use some type of error-prohibitive input (like a dial)
function Configure() {
  const [desiredCoffeeWeight, setDesiredCoffeeWeight] = useState(15);
  let session = usePourSession(desiredCoffeeWeight);

  return (
    <div className="flex flex-col justify-center items-center">
      <label className="mb-4 text-2xl text-left">
        Set Coffee Weight (in grams):
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
      <div className="absolute bottom-0 left-1/4 w-1/2 p-4 my-4 bg-blue-400 rounded-md text-white text-center">
        Start
      </div>
    </div>
  );
}

export default Configure;
