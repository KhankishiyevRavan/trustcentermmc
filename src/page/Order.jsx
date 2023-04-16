import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
function Order() {
  const [data, setData] = useState({
    step1: {},
    step2: {},
  });
  return (
    <>
      <section id="order-section">
        <div className="order-image">
          <img src="/imgs/order-step1.png" alt="" />
        </div>
        <div className="order-form">
          <div className="order-steps">
            <div className="order-step">1</div>
            <div className="order-step">2</div>
            <div className="order-step">3</div>
            <div className="order-step">4</div>
            <div className="order-step">5</div>
            <div className="order-step">6</div>
          </div>
          <form action="">
            <p>What is the current stage of your project?</p>
            <div className="form-choose">
              <label htmlFor="ch-1">
                <input type="radio" name="current" id="ch-1" />
                Idea
              </label>
              <label htmlFor="ch-2">
                <input type="radio" name="current" id="ch-2" />
                Prototype/ Specification
              </label>
              <label htmlFor="ch-3">
                <input type="radio" name="current" id="ch-3" />
                Designed solution
              </label>
              <label htmlFor="ch-4">
                <input type="radio" name="current" id="ch-4" />
                MVP
              </label>
            </div>
            <button>
              Next <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Order;
