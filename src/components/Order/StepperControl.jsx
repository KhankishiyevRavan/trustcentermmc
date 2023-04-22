import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StepperContext } from "../../contexts/StepperContext";
import axios from "axios";
import { Link } from "react-router-dom";
function StepperControl({ handleClick, currentStep, steps,sendData }) {
  // const { userData, setUserData } = useContext(StepperContext);
  
  return (
    <div className="stepper-control">
      {currentStep < steps.length ? (
        <div>
          <button
            onClick={() => handleClick()}
            style={{
              visibility: `${currentStep === 1 ? "hidden" : "visible"}`,
            }}
          >
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" /> Öncəki
          </button>
          {currentStep === steps.length - 1 ? (
            <button onClick={(e)=>sendData(e)}>Göndər</button>
          ) : (
            <button onClick={() => handleClick("next")}>
              Növbəti <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
            </button>
          )}
        </div>
      ) : (
        <button>
          <Link to="/">Çıxış</Link>
        </button>
      )}
    </div>
  );
}

export default StepperControl;
