import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import { useEffect } from "react";
import { useRef } from "react";
function Step3() {
  const check = useRef();
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name } = e.target;
    const value = e.target.closest("label").innerText;
    console.log(e);
    if (e.target.checked) {
      userData.professionalNeed
        ? setUserData({
            ...userData,
            [name]: [...userData.professionalNeed, value],
          })
        : setUserData({ ...userData, [name]: [value] });
    } else {
      console.log(userData.professionalNeed.filter((w) => w !== value));
      userData.professionalNeed &&
        setUserData({
          ...userData,
          [name]: userData.professionalNeed.filter((w) => w !== value),
        });
    }
  };
  useEffect(() => {
    [...check.current?.querySelectorAll("label")].map((inp) => {
      // console.log(inp.innerText, userData.currentStage);
      if (userData.professionalNeed?.includes(inp.innerText)) {
        inp.querySelector("input").setAttribute("checked", "");
      } else {
        inp.querySelector("input").removeAttribute("checked");
      }
    });
  }, []);
  return (
    <div>
      <form action="">
        <p>
          {/* Do you need a professional consultation from any of the specialists
          below? */}
          Mütəxəssislərdən hər hansı birinin peşəkar məsləhətinə ehtiyacınız
          varmı aşağıda?
        </p>
        <div className="form-choose checkboxes" ref={check}>
          <label htmlFor="ch-1">
            <input
              value="idea"
              onChange={handleChange}
              type="checkbox"
              name="professionalNeed"
              id="ch-1"
            />
            UI/UX Dizayner
          </label>
          <label htmlFor="ch-2">
            <input
              onChange={handleChange}
              type="checkbox"
              name="professionalNeed"
              id="ch-2"
            />
            Front-end Developer
          </label>
          <label htmlFor="ch-3">
            <input
              onChange={handleChange}
              type="checkbox"
              name="professionalNeed"
              id="ch-3"
            />
            Back-end Developer
          </label>
          <label htmlFor="ch-4">
            <input
              onChange={handleChange}
              type="checkbox"
              name="professionalNeed"
              id="ch-4"
            />
            Marketoloq
          </label>
          <label htmlFor="ch-5">
            <input
              onChange={handleChange}
              type="checkbox"
              name="professionalNeed"
              id="ch-5"
            />
            Proyekt Menecer
          </label>
        </div>
      </form>
    </div>
  );
}

export default Step3;
