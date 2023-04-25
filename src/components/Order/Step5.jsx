import { useContext } from "react";
import { StepperContext } from "../../contexts/StepperContext";
function Step5() {
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div>
      <form action="">
        <div className="form-text">
          <label htmlFor="ch-1">
            Ad
            <br />
            <input
              type="text"
              name="name"
              onChange={handleChange}
              id="ch-1"
              placeholder="Adınızı qeyd edin"
              value={userData.name || ""}
            />
          </label>
          <label htmlFor="ch-2">
            Soyad
            <br />
            <input
              type="text"
              name="surname"
              onChange={handleChange}
              id="ch-2"
              placeholder="Soyadınızı qeyd edin"
              value={userData.surname || ""}
            />
          </label>
          <label htmlFor="ch-3">
            Email
            <br />
            <input
              type="text"
              name="email"
              onChange={handleChange}
              id="ch-3"
              placeholder="example@gmail.com"
              value={userData.email || ""}
            />
          </label>
          <label htmlFor="ch-4">
            Telefon
            <br />
            <input
              type="text"
              name="phone"
              onChange={handleChange}
              id="ch-4"
              placeholder="+994 XX XXX XX XX"
              value={userData.phone}
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Step5;
