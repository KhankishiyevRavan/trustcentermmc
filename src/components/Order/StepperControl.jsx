import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div id="stepper-control">
      <button onClick={() => handleClick()}>
        Prev <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
      </button>
      <button onClick={() => handleClick("next")}>
        {/* {currentStep === steps.length - 1 ? "Confirm" : "Next"} */}
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
      </button>
    </div>
  );
}

export default StepperControl;
