import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
function PortfolioDetail() {
  const [portfolioData, setPortfolioData] = useState([]);
  useState(() => {
    const getPortfolioData = async () => {
      let data = await fetch("https://admin.trustcenterholding.com/portfolio/").then((a) =>
        a.json()
      );
      console.log(data);
      // setPortfolioData(data.filter(d)=>d.name===);
    };
    getPortfolioData();
  }, []);
  return (
    <>
      <section className="portfolio-detail-section">
        <h3 className="h-title">Website Name</h3>
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
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
        <div className="container">
          <p>
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis
            condimentuobortis.Korem ipsum dolor sit amet, consectetur adipiscing
            elit. Nunc vulputate libero et velit interdum, ac aliquet odio
            mattis. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
          </p>
          <ul>
            <li>
              <strong>Date :</strong> 17/11/2020
            </li>
            <li>
              <strong>Link :</strong> 17/11/2020
            </li>
            <li>
              <strong>Technologies :</strong> 17/11/2020
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default PortfolioDetail;
