import { useContext, useEffect, useRef } from "react";
import { StepperContext } from "../../contexts/StepperContext";

function Step4() {
  const check = useRef();
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name } = e.target;
    const value = e.target.closest("label").innerText;
    setUserData({ ...userData, [name]: value });
  };
  useEffect(() => {
    let inpts = [...check.current?.querySelectorAll("label")];
    for (let i = 0; i < inpts.length; i++) {
      if (inpts[i].innerText === userData.duration) {
        
        inpts[i].querySelector("input").setAttribute("checked", "");
      } else {
        inpts[i].querySelector("input").removeAttribute("checked");
      }
    }
    // [...check.current?.querySelectorAll("label")].map((inp) => {
    //   if (inp.innerText === userData.duration) {
    //     inp.querySelector("input").setAttribute("checked", "");
    //   } else {
    //     inp.querySelector("input").removeAttribute("checked");
    //   }
    // });
  }, [userData]);

  return (
    <div>
      <form action="">
        <p>Layihənizin gözlənilən müddəti nə qədərdir?</p>
        <div className="form-choose" ref={check}>
          <label htmlFor="ch-1">
            <input
              type="radio"
              name="duration"
              onChange={handleChange}
              id="ch-1"
            />
            1 ay
          </label>
          <label htmlFor="ch-2">
            <input
              type="radio"
              name="duration"
              onChange={handleChange}
              id="ch-2"
            />
            3 ay
          </label>
          <label htmlFor="ch-3">
            <input
              type="radio"
              name="duration"
              onChange={handleChange}
              id="ch-3"
            />
            6 ay
          </label>
          <label htmlFor="ch-4">
            <input
              type="radio"
              name="duration"
              onChange={handleChange}
              id="ch-4"
            />
            9 ay
          </label>
          <label htmlFor="ch-5">
            <input
              type="radio"
              name="duration"
              onChange={handleChange}
              id="ch-5"
            />
            12 ay +
          </label>
        </div>
      </form>
    </div>
  );
}

export default Step4;
