import React from "react";

function Subscribe() {
  return (
    <section id="subscribe-section" className="container">
      <div className="subs-text">
        <p>Yenilikdən xəbərdar olmaq istəyirsənmi ? </p>
        <span>O zaman mailini yaz sizi xəbərdar edək </span>
        <input type="text" placeholder="Enter your email" />
        <button className="btn active">Göndər</button>
      </div>
    </section>
  );
}

export default Subscribe;
