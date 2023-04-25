import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import { useEffect } from "react";
import { useRef } from "react";

function CurrentIdea() {
  const check = useRef();
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name } = e.target;
    // console.log(e);
    const value = e.target.getAttribute("data-value");
    setUserData({ ...userData, [name]: value });
  };
  useEffect(() => {
    let inpts = [...check.current?.querySelectorAll("input")];
    for (let i = 0; i < inpts.length; i++) {
      if (inpts[i].getAttribute("data-value") === userData.currentStage) {
        inpts[i].setAttribute("checked", "");
      } else {
        inpts[i].removeAttribute("checked");
      }
    }
    // [...check.current?.querySelectorAll("input")].map((inp) => {
    //   if (inp.getAttribute("data-value") === userData.currentStage) {
    //     inp.setAttribute("checked", "");
    //   } else {
    //     inp.removeAttribute("checked");
    //   }
    // });
  }, [userData]);
  return (
    <div>
      <form action="">
        <p>
          Layihəniz hazırda hansı mərhələdədir?
          {/* What is the current stage of your project? */}
        </p>
        <div className="form-choose" ref={check}>
          <label htmlFor="ch-1">
            <input
              data-value={"Idea"}
              type="radio"
              name="currentStage"
              id="ch-1"
              onChange={handleChange}
            />
            Idea
            {/* Idea */}
          </label>
          <label htmlFor="ch-2">
            <input
              data-value={"Prototype/ Specification"}
              type="radio"
              name="currentStage"
              id="ch-2"
              onChange={handleChange}
            />
            Prototip
            {/* Prototype/ Specification */}
          </label>
          <label htmlFor="ch-3">
            <input
              data-value={"Designed solution"}
              type="radio"
              name="currentStage"
              id="ch-3"
              onChange={handleChange}
            />
            Dizayn həlli
            {/* Designed solution */}
          </label>
          <label htmlFor="ch-4">
            <input
              data-value={"MVP"}
              type="radio"
              name="currentStage"
              id="ch-4"
              onChange={handleChange}
            />
            MVP
          </label>
        </div>
      </form>
    </div>
  );
}

export default CurrentIdea;
