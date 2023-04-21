import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";
import axios from "axios";

function Step6() {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    // const value = e.target.closest("label").innerText;
    setUserData({ ...userData, [name]: value });
  };
  const sendData = (e) => {
    e.preventDefault();
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    axios
      .post("https://admin.trustcenterholding.com/order/", userData, config)
      .then((response) => {
        console.log(response, "success");
      })
      .catch((error) => {
        console.log(error, "error");
      });
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
        <button onClick={(e) => sendData(e)}>Send</button>
      </form>
    </div>
  );
}

export default Step6;
