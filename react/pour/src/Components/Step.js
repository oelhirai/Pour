import React from "react";

const Step = ({ step = 1, targetSteps = 1, weight = 1, targetWeight = 1 }) => (
  <div className="mb-4 text-5xl">
    <p>
      <b>
        Step {step}/{targetSteps}
      </b>
    </p>
    <p>
      Pour <b>{weight}g</b>
    </p>
    <p>
      To reach <b>{targetWeight}g</b>
    </p>
  </div>
);

export default Step;
