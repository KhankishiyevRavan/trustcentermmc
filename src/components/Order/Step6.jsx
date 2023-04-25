import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";

function Step6() {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <form action="">
        <p>What is the expected duration of your project?</p>
        <div className="form-text">
          <label htmlFor="ch-1">
            Proyekt adı
            <br />
            <input
              type="text"
              name="description"
              onChange={handleChange}
              id="ch-1"
              placeholder="Example"
              value={userData.description || ""}
            />
          </label>
          <label htmlFor="ch-2">
            Proyekti detalları
            <br />
            <input
              type="text"
              name="projectDeatils"
              onChange={handleChange}
              id="ch-2"
              placeholder="..."
              value={userData.projectDeatils || ""}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Step6;
