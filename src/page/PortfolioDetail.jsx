import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useParams } from "react-router-dom";
function PortfolioDetail() {
  const [portfolioData, setPortfolioData] = useState([]);
  const { id } = useParams();
  useState(() => {
    const getPortfolioData = async () => {
      // `https://admin.trustcenterholding.com/portfolio/${id}`
      let data = await fetch(
        `https://admin.trustcenterholding.com/portfolio/${id}/`
      ).then((a) => a.json());
      setPortfolioData(data);
    };
    getPortfolioData();
  }, []);
  return (
    <>
      <section className="portfolio-detail-section">
        <h3 className="h-title">{portfolioData.name}</h3>
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {portfolioData.image?.map((pic, index) => (
            <SwiperSlide key={index}>
              <img src={pic.image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="container">
          <p>{portfolioData.text}</p>
          <ul>
            <li>
              <strong>Tarix :</strong> {portfolioData.date}
            </li>
            {/* <li>

              <strong>Link :</strong> 17/11/2020
            </li> */}
            <li>
              <strong>Texnologiyalar :</strong>{" "}
              {portfolioData.service && portfolioData.service[0] === 3
                ? "React / DJango"
                : "Figma"}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default PortfolioDetail;
