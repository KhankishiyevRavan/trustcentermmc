import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Stepper({ steps, currentStep }) {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();
  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newSteps.length) {
      //  current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: false,
        };
        count++;
      } else if (count < stepNumber) {
        // step completed
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        // step pending
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };
  useEffect(() => {
    const stepsState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );
    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);
  // if (index < newStep.length - 1) 
  const displaySteps = newStep.map((step, index) => index<newStep.length-1&& 
    (
      <div
        key={index}
        className={step.selected ? "order-step selected" : "order-step "}
      >
        {!step.completed ? (
          index + 1
        ) : (
          <FontAwesomeIcon icon="fa-solid fa-check" />
        )}
      </div>
    )
  );
  return (
    <div>
      <div className="order-steps">{displaySteps}</div>
    </div>
  );
}

export default Stepper;
