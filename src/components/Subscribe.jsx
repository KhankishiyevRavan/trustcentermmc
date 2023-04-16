import axios from "axios";
import React, { useState } from "react";

function Subscribe() {
  const [email,setEmail]=useState("")
  const sendEmail = (e) => {
    e.preventDefault();
    fetch("http://95.216.165.58/subscribe/", {
      method: "POST",
      body: email,
    });
  };
  return (
    <section id="subscribe-section" className="container">
      <div className="subs-text">
        <p>Yenilikdən xəbərdar olmaq istəyirsənmi ? </p>
        <span>O zaman mailini yaz sizi xəbərdar edək </span>
        <input type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />
        <button onClick={sendEmail} className="btn active">
          Göndər
        </button>
      </div>
    </section>
  );
}

export default Subscribe;
