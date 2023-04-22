import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Service() {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    const getServiceData = async () => {
      let data = await fetch(
        "https://admin.trustcenterholding.com/service/"
      ).then((a) => a.json());
      setServiceData(data);
      console.log(data);
    };
    getServiceData();
  }, []);
  return (
    <>
    
      <section id="services-section">
        <div className="container">
          <h3 className="h-title">Technology services</h3>
          <div id="services">
            {serviceData.map((s, index) => {
              return (
                <Link to={`/service/${s.id}`} key={index} className="service">
                  <h5 className="service-name">{s.name}</h5>
                  <div className="service-image">
                    <img src={s.image} alt="" />
                  </div>
                  <p className="service-text">{s.text}</p>
                </Link>
              );
            })}
            {/* <div className="service">
              <h5 className="service-name">Web Development</h5>
              <div className="service-image">
                <img src="/imgs/service-example.svg" alt="" />
              </div>
              <p className="service-text">
                The CSS Grid Layout Module offers a grid-based layout system,
                with rows and columns, making it easier to design web pages
                without
              </p>
            </div>
            <div className="service">
              <h5 className="service-name">UX/UI design </h5>
              <div className="service-image">
                <img src="/imgs/service-example2.svg" alt="" />
              </div>
              <p className="service-text">
                The CSS Grid Layout Module offers a grid-based layout system,
                with rows and columns, making it easier to design web pages
                without
              </p>
            </div>
            <div className="service">
              <h5 className="service-name">DevOps Services</h5>
              <div className="service-image">
                <img src="/imgs/devOps-service.svg" alt="" />
              </div>
              <p className="service-text">
                The CSS Grid Layout Module offers a grid-based layout system,
                with rows and columns, making it easier to design web pages
                without
              </p>
            </div>
            <div className="service">
              <h5 className="service-name">Product Management </h5>
              <div className="service-image">
                <img src="/imgs/projectManagment-service.svg" alt="" />
              </div>
              <p className="service-text">
                The CSS Grid Layout Module offers a grid-based layout system,
                with rows and columns, making it easier to design web pages
                without
              </p>
            </div>
            <div className="service">
              <h5 className="service-name">Software Development </h5>
              <div className="service-image">
                <img src="/imgs/softwareDevelopment-service.svg" alt="" />
              </div>
              <p className="service-text">
                The CSS Grid Layout Module offers a grid-based layout system,
                with rows and columns, making it easier to design web pages
                without
              </p>
            </div>
            <div className="service">
              <h5 className="service-name">Cloud Development </h5>
              <div className="service-image">
                <img src="/imgs/cloudDevelopment-service.svg" alt="" />
              </div>
              <p className="service-text">
                The CSS Grid Layout Module offers a grid-based layout system,
                with rows and columns, making it easier to design web pages
                without
              </p>
            </div>
            <div className="service">
              <h5 className="service-name">Data Analitics </h5>
              <div className="service-image">
                <img src="/imgs/dataAnalitics-service.svg" alt="" />
              </div>
              <p className="service-text">
                The CSS Grid Layout Module offers a grid-based layout system,
                with rows and columns, making it easier to design web pages
                without
              </p>
            </div>
            <div className="service">
              <h5 className="service-name">Startups & MVP services </h5>
              <div className="service-image">
                <img src="/imgs/startup&mvpservices.svg" alt="" />
              </div>
              <p className="service-text">
                The CSS Grid Layout Module offers a grid-based layout system,
                with rows and columns, making it easier to design web pages
                without
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
