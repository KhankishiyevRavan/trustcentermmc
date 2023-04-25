import { useContext, useEffect, useRef } from "react";
import { StepperContext } from "../../contexts/StepperContext";
function ChooseType() {
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
      if (inpts[i].innerText === userData.chooseWebSite) {
        inpts[i].querySelector("input").setAttribute("checked", "");
      } else {
        inpts[i].querySelector("input").removeAttribute("checked");
      }
    }
    // console.log(check.current.querySelectorAll("input"));
    // [...check.current?.querySelectorAll("label")].map((inp) => {
    //   if (inp.innerText === userData.chooseWebSite) {
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
          Web saytın hansı tipə uyğundur ?{/* Choose your website's type: */}
        </p>
        <div className="form-choose checkboxes" ref={check}>
          <label htmlFor="ch-1">
            <input
              onChange={handleChange}
              type="radio"
              name="chooseWebSite"
              id="ch-1"
            />
            Finansal Servis
            {/* Financial Services */}
          </label>
          <label htmlFor="ch-2">
            <input
              onChange={handleChange}
              type="radio"
              name="chooseWebSite"
              id="ch-2"
            />
            eKommers
            {/* eCommerce */}
          </label>
          <label htmlFor="ch-3">
            <input
              onChange={handleChange}
              type="radio"
              name="chooseWebSite"
              id="ch-3"
            />
            Seyahət&Hospital
            {/* Travel & Hospitality */}
          </label>
          <label htmlFor="ch-4">
            <input
              onChange={handleChange}
              type="radio"
              name="chooseWebSite"
              id="ch-4"
            />
            Telekom
          </label>
          <label htmlFor="ch-5">
            <input
              onChange={handleChange}
              type="radio"
              name="chooseWebSite"
              id="ch-5"
            />
            Media&Əyləncə
            {/* Media & Entertainment */}
          </label>
          <label htmlFor="ch-6">
            <input
              onChange={handleChange}
              type="radio"
              name="chooseWebSite"
              id="ch-6"
            />
            Müəssisə
            {/* Enterprise */}
          </label>
          <label htmlFor="ch-7">
            <input
              onChange={handleChange}
              type="radio"
              name="chooseWebSite"
              id="ch-7"
            />
            Daşınmaz əmlak
            {/* Real Estate */}
          </label>
          <label htmlFor="ch-8">
            <input
              onChange={handleChange}
              type="radio"
              name="chooseWebSite"
              id="ch-8"
            />
            Sağlamlıq
            {/* Healthcare. */}
          </label>
          <label htmlFor="ch-9">
            <input
              onChange={handleChange}
              type="radio"
              name="chooseWebSite"
              id="ch-9"
            />
            Oyun
            {/* iGaming */}
          </label>
          <label htmlFor="ch-10">
            <input
              onChange={handleChange}
              type="radio"
              name="chooseWebSite"
              id="ch-10"
            />
            Lojistika
            {/* Logistics */}
          </label>
          <label htmlFor="ch-11">
            <input
              onChange={handleChange}
              type="radio"
              name="chooseWebSite"
              id="ch-11"
            />
            Pərakəndə
            {/* Retail */}
          </label>
          <label htmlFor="ch-12">
            <input
              onChange={handleChange}
              type="radio"
              name="chooseWebSite"
              id="ch-12"
            />
            Avtomobil
            {/* Automotive */}
          </label>
          <label htmlFor="ch-13">
            <input
              onChange={handleChange}
              type="radio"
              name="chooseWebSite"
              id="ch-13"
            />
            Manufaktura
            {/* Manufacturing */}
          </label>
          <label htmlFor="ch-14">
            <input
              onChange={handleChange}
              type="radio"
              name="chooseWebSite"
              id="ch-14"
            />
            Aviasiya
            {/* Avitation */}
          </label>
          <label htmlFor="ch-15">
            <input
              onChange={handleChange}
              type="radio"
              name="chooseWebSite"
              id="ch-15"
            />
            Başqa
          </label>
        </div>
      </form>
    </div>
  );
}

export default ChooseType;
