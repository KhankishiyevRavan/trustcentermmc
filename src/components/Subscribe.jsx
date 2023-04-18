import axios from "axios";
import React, { useState } from "react";

function Subscribe() {
  let email = new FormData();
  const sendEmail = (e) => {
    e.preventDefault();
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    axios
      .post("https://admin.trustcenterholding.com/subscribe/", email, config)
      .then((response) => {
        console.log(response, "success");
      })
      .catch((error) => {
        console.log(error, "error");
      });
    // fetch("https://admin.trustcenterholding.com/subscribe/", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(email),
    // });
  };
  return (
    <section id="subscribe-section" className="container">
      <div className="subs-text">
        <p>Yenilikdən xəbərdar olmaq istəyirsənmi ? </p>
        <span>O zaman mailini yaz sizi xəbərdar edək </span>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => email.append(e.target.name, e.target.value)}
        />
        <button onClick={sendEmail} className="btn active">
          Göndər
        </button>
      </div>
    </section>
  );
}

export default Subscribe;
