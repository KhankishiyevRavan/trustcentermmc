import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
// import faker from "faker";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);
function AboutUs() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    // "May",
    // "June",
    // "July",
    // "August",
    // "September",
    // "October",
    // "Novermber",
    // "December",
  ];
  const data = {
    labels,
    datasets: [
      // {
      //   type: "line",
      //   label: "Web site",
      //   borderColor: "rgb(255, 99, 132)",
      //   borderWidth: 2,
      //   fill: false,
      //   data: [2, 2, 3, 4, 5, 33],
      // },
      {
        type: "bar",
        label: "Web site",
        backgroundColor: "rgb(75, 192, 192)",
        data: [3, 7, 5, 2, ],
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar",
        label: "Web design",
        backgroundColor: "rgb(53, 162, 235)",
        data: [5, 4, 6, 4,],
      },
    ],
  };
  const [aboutData, setAboutData] = useState([]);
  useEffect(() => {
    const getAboutData = async () => {
      let data = await fetch("http://95.216.165.58/about/").then((a) =>
        a.json()
      );
      setAboutData(data.about.section);
      // console.log(data.about.section);
    };
    getAboutData();
  }, []);
  return (
    <>
      <section id="about-top">
        <div className="container">
          <Chart type="bar" data={data} />
          {/* <div className="image">
            <img src="/imgs/about-img.svg" alt="" />
          </div> */}
        </div>
      </section>
      <section id="about-us">
        {aboutData?.map((a,index) => (
          <div key={index} className="section">
            <div className="about-image">
              <img src={a.image} alt="" />
            </div>
            <div className="about-text">
              <h3 className="h-title">About us</h3>
              <div dangerouslySetInnerHTML={{ __html: a.text }}></div>
            </div>
          </div>
        ))}
        {/* <div className="section">
          <div className="about-image">
            <img src="/imgs/comp1.svg" alt="" />
          </div>
          <div className="about-text">
            <h3 className="h-title">About us</h3>
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            nceptos himenaeos. Curabitur tempus urna at turpis
            condimentuobortis.Korem ipsum dolor sit amet, consectetu r
            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosquad litora torquent per
            conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Error ipsam fugit distinctio
            consequuntur explicabo nam fuga quod est illum culpa?
          </div>
        </div>
        <div className="section">
          <div className="about-image">
            <img src="/imgs/comp1.svg" alt="" />
          </div>
          <div className="about-text">
            <h3 className="h-title">About us</h3>
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            nceptos himenaeos. Curabitur tempus urna at turpis
            condimentuobortis.Korem ipsum dolor sit amet, consectetu r
            adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet
            odio mattis. Class aptent taciti sociosquad litora torquent per
            conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Error ipsam fugit distinctio
            consequuntur explicabo nam fuga quod est illum culpa?
          </div>
        </div> */}
      </section>
    </>
  );
}

export default AboutUs;
