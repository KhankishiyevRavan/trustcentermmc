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
import axios from "axios";
function OrderTest() {
  const [currentStep, setCurrentStep] = useState(1);
  const [sendaAllow, setSendAllow] = useState(true);
  const [userData, setUserData] = useState({
    chooseWebSite: "",
    currentStage: "",
    description: "",
    duration: "",
    email: "",
    name: "",
    phone: "",
    professionalNeed: "",
    projectDeatils: "",
    surname: "",
  });
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
      default:
        return <CurrentIdea />;
    }
  };
  const handleClick = (direction) => {
    document.querySelector(".order-form form")?.classList.remove("deactive");
    setTimeout(() => {
      let newStep = currentStep;
      direction === "next" ? newStep++ : newStep--;
      newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }, 500);
  };

  const sendData = (e) => {
    // console.log({ ...userData });
    e.preventDefault();

    // console.log(Object.entries(userData));
    let filter = Object.entries(userData).filter((a) => a[1].length ===0);

    if (filter.length) {
      setSendAllow(false);
      alert("Zehmet olmasa formu tam doldurun");

    }
    const config = {
      headers: { "Content-type": "application/json" },
    };
    if (!sendaAllow) {
      return;
    }
    setSendAllow(false);
    axios
      .post("https://admin.trustcenterholding.com/order/", userData, config)
      .then((response) => {
        handleClick("next");
        // console.log(response, "success");
        setSendAllow(true);
      })
      .catch((error) => {
        handleClick("next");
        // console.log(error, "error");
      });
  };
  useEffect(() => {
    document.querySelector(".order-form form")?.classList.add("deactive");
  }, []);
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".order-form form")?.classList.add("deactive");
    }, 500);
  }, [currentStep]);
  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);
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
          sendData={sendData}
        />
      </div>
    </section>
  );
}

export default OrderTest;
