import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import { useEffect } from "react";
import { useRef } from "react";
function Step3() {
  const check = useRef();
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name } = e.target;
    const value = e.target.getAttribute("data-value");
    if (e.target.checked) {
      let filterData = userData.professionalNeed
        ?.split(" ")
        .filter((a) => a !== value);
      userData.professionalNeed
        ? !filterData.includes(value) &&
          setUserData({
            ...userData,
            [name]: userData.professionalNeed + " " + value,
          })
        : setUserData({ ...userData, [name]: value });
    } else {
      let filterData = userData.professionalNeed
        .split(" ")
        .filter((a) => a !== value)
        .toString()
        .replace(/,/gi, " ");
      console.log(filterData.toString().replace(/,/gi, " "));
      setUserData({ ...userData, [name]: filterData });
    }
  };
  useEffect(() => {
    let inpts = [...check.current?.querySelectorAll("label")];
    for (let i = 0; i < inpts.length; i++) {
      if (
        userData.professionalNeed?.includes(
          inpts[i].querySelector("input").getAttribute("data-value")
        )
      ) {
        inpts[i].querySelector("input").setAttribute("checked", "");
      } else {
        inpts[i].querySelector("input").removeAttribute("checked");
      }
    }
    // [...check.current?.querySelectorAll("label")].map((inp) => {
    //   if (
    //     userData.professionalNeed?.includes(
    //       inp.querySelector("input").getAttribute("data-value")
    //     )
    //   ) {
    //     inp.querySelector("input").setAttribute("checked", "");
    //   } else {
    //     inp.querySelector("input").removeAttribute("checked");
    //   }
    // });
  }, [userData]);
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
              // onChange={handleChange}
              onClick={handleChange}
              type="checkbox"
              name="professionalNeed"
              id="ch-1"
              data-value={"UI/UXDizayner"}
            />
            UI/UX Dizayner
          </label>
          <label htmlFor="ch-2">
            <input
              onClick={handleChange}
              type="checkbox"
              name="professionalNeed"
              id="ch-2"
              data-value={"Front-endDeveloper"}
            />
            Front-end Developer
          </label>
          <label htmlFor="ch-3">
            <input
              onClick={handleChange}
              type="checkbox"
              name="professionalNeed"
              id="ch-3"
              data-value={"Back-endDeveloper"}
            />
            Back-end Developer
          </label>
          <label htmlFor="ch-4">
            <input
              onClick={handleChange}
              type="checkbox"
              name="professionalNeed"
              id="ch-4"
              data-value={"Marketoloq"}
            />
            Marketoloq
          </label>
          <label htmlFor="ch-5">
            <input
              onClick={handleChange}
              type="checkbox"
              name="professionalNeed"
              id="ch-5"
              data-value={"ProjectManager"}
            />
            Proyekt Menecer
          </label>
        </div>
      </form>
    </div>
  );
}

export default Step3;
