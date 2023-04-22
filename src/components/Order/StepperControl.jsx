import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import axios from "axios";
import { Link } from "react-router-dom";
function StepperControl({ handleClick, currentStep, steps }) {
  const { userData, setUserData } = useContext(StepperContext);
  const sendData = (e) => {
    e.preventDefault();
    const config = {
      // headers: { "content-type": "multipart/form-data" },
    };
    axios
      .post("https://admin.trustcenterholding.com/order/", userData, config)
      .then((response) => {
        handleClick("next");
        console.log(response, "success");
      })
      .catch((error) => {
        handleClick("next");
        console.log(error, "error");
      });
  };
  return (
    <div className="stepper-control">
      {currentStep < steps.length ? (
        <div>
          <button
            onClick={() => handleClick()}
            style={{ visibility:`${currentStep === 1 ? "hidden" : "visible"}`}}
          >
            <FontAwesomeIcon icon="fa-solid fa-chevron-left" /> Öncəki
          </button>
          {currentStep === steps.length - 1 ? (
            <button onClick={sendData}>Göndər</button>
          ) : (
            <button
              onClick={() => handleClick("next")}
            >
              Növbəti <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
            </button>
          )}
        </div>
      ) : (
        <button>
          <Link to="/">
          Çıxış
          </Link>
          </button>
      )}
    </div>
  );
}

export default StepperControl;
