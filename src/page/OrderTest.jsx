import React, { useEffect, useState } from "react";
import Stepper from "../components/Order/Stepper";
import StepperControl from "../components/Order/StepperControl";
import CurrentIdea from "../components/Order/CurrentIdea";
import ChooseType from "../components/Order/ChooseType";
import Step3 from "../components/Order/Step3";
import Step4 from "../components/Order/Step4";
import Step5 from "../components/Order/Step5";
import Step6 from "../components/Order/Step6";
import { StepperContext } from "../contexts/StepperContext";
import Final from "../components/Order/Final";
function OrderTest() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "currentIdea",
    "websiteType",
    "professionalNeed",
    "projectDuration",
    "personalInformation",
    "projectDescribtion",
    "finishText",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <CurrentIdea />;
      case 2:
        return <ChooseType />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      case 5:
        return <Step5 />;
      case 6:
        return <Step6 />;
      case 7:
        return <Final />;
    }
  };
  const handleClick = (direction) => {
    // console.log("salam");
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    // console.log(steps.length);
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  useEffect(() => {
    console.log(userData);
  }, [userData]);
  return (
    <section id="order-section">
      <div className="order-image">
        <img src="/imgs/order-step1.png" alt="" />
      </div>
      <div className="order-form">
        <Stepper steps={steps} currentStep={currentStep} />
        <div className="form-place">
          <StepperContext.Provider
            value={{
              userData,
              setUserData,
              finalData,
              setFinalData,
            }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      </div>
    </section>
  );
}

export default OrderTest;
