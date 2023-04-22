import React, { useEffect, useState } from "react";
import selin_bg from "../images/selin_bg.svg";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Subscribe from "../components/Subscribe";
import { Link } from "react-router-dom";
function Homepage() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    const getPortfolioData = async () => {
      let data = await fetch(
        "https://admin.trustcenterholding.com/portfolio/"
      ).then((a) => a.json());
      setPortfolioData(data);
      console.log(data);
    };
    getPortfolioData();
    const getServiceData = async () => {
      // "https://admin.trustcenterholding.com/service/"
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
      <section id="selin">
        <div className="container">
          <div id="selin-text">
            <h2>
              Siz xəyal edin biz <span className="blue-purple">kodlayaq</span>
            </h2>
            <p>
              Biz TRUSTCENTERMMC olaraq artıq 1 ildirdən çoxdur ki development
              sahəsində fəaliyyət göstəririk
            </p>
            <div id="buttons">
              <button className="btn active">
                <Link to="/contact">Bizimlə Əlaqə</Link>
              </button>
              <button className="btn">
                <Link to="/about">Haqqımızda</Link>
              </button>
            </div>
          </div>
          <div id="selin-image">
            <img src={selin_bg} alt="" />
          </div>
        </div>
      </section>
      <section id="help_you">
        <div className="container">
          <h3 className="h-title">Xidmət etdiyimiz sahələr</h3>
          <div id="help-cards">
            <Link to="/service/3/" className="help-card">
              <div className="help-card-image">
                <img src="/imgs/website-icon.svg" alt="" />
              </div>
              <span className="help-card-about">Web-sayt</span>
            </Link>
            <Link to="/service/4/" className="help-card">
              <div className="help-card-image">
                <img src="/imgs/design-icon.svg" alt="" />
              </div>
              <span className="help-card-about">Dizayn</span>
            </Link>
            <Link to="/portfolio/" className="help-card">
              <div className="help-card-image">
                <img src="/imgs/socialMedia-icon.svg" alt="" />
              </div>
              <span className="help-card-about">Sosial Media</span>
            </Link>
            <Link to="/service/6/" className="help-card">
              <div className="help-card-image">
                <img src="/imgs/productManager-icon.png" alt="" />
              </div>
              <span className="help-card-about">Prodakt Menecment</span>
            </Link>
            <Link to="/service/5/" className="help-card">
              <div className="help-card-image">
                <img src="/imgs/cloud-icon.png" alt="" />
              </div>
              <span className="help-card-about">Cloud</span>
            </Link>
            <Link to="/service" className="help-card">
              <div className="help-card-image">
                <img src="/imgs/right-icon.svg" alt="" />
              </div>
              <span className="help-card-about">More</span>
            </Link>
          </div>
        </div>
      </section>
      <section id="blogs-hm">
        <h3 className="h-title">Portfoliomuz</h3>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          // centeredSlides={true}
          // centeredSlidesBounds={true}
          // centerInsufficientSlides={true}

          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            500: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            770: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1025: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          // navigation={true}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {portfolioData?.map((p, index) => (
            <SwiperSlide key={index}>
              <Link to={`/portfolio/${p.id}`} className="carousel-card">
                <div className="carousel-card-image">
                  <img
                    src={`https://admin.trustcenterholding.com/${p.main_image.slice(
                      20
                    )}`}
                    alt=""
                  />
                </div>
                {/* <div className="carousel-text">
                  <div>
                    <h5 className="carousel-title">
                      {index % 2 === 0 ? "Dashboard" : "Interior Design"}
                    </h5>
                    <span className="carousel-date">25-02-2022</span>
                  </div>
                  <p>
                    {index % 2 === 0
                      ? "Data , istifadəçi və ümumi web saytın idarə etmə sistemi"
                      : "Interyer dizaynlarla dolu tərtib olunmuş web səhifə"}{" "}
                  </p>
                </div> */}
              </Link>
            </SwiperSlide>
          ))}
          {portfolioData?.map((p, index) => (
            <SwiperSlide key={index}>
              <Link to={`/portfolio/${p.id}`} className="carousel-card">
                <div className="carousel-card-image">
                  <img
                    src={`https://admin.trustcenterholding.com/${p.main_image.slice(
                      20
                    )}`}
                    alt=""
                  />
                </div>
                {/* <div className="carousel-text">
                  <div>
                    <h5 className="carousel-title">
                      {" "}
                      {index % 2 === 0 ? "Dashboard" : "Interior Design"}{" "}
                    </h5>
                    <span className="carousel-date">25-02-2022</span>
                  </div>
                  <p>
                    {index % 2 === 0
                      ? "Data , istifadəçi və ümumi web saytın idarə etmə sistemi"
                      : "Interyer dizaynlarla dolu tərtib olunmuş web səhifə"}{" "}
                  </p>
                </div> */}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section id="services-section">
        <div className="container">
          <h3 className="h-title">Technology services</h3>
          <div id="services">
            {serviceData.map((s, index) => {
              if (index >= 0 && index < 2) {
                return (
                  <Link
                    to={`/service/${s.id}/`}
                    key={index}
                    className="service"
                  >
                    <h5 className="service-name">{s.name}</h5>
                    <div className="service-image">
                      <img
                        src={`https://admin.trustcenterholding.com/${s.image.slice(
                          20
                        )}`}
                        alt=""
                      />
                    </div>
                    <p className="service-text">{s.text}</p>
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </section>
      <section id="achievement-section">
        <div>
          <div className="container">
            <div className="achievement">
              <div className="achievement-icon">
                <img src="/imgs/complete-icon.svg" alt="" />
              </div>
              <span className="achievement-count">9</span>
              <span className="achievement-text">Hazırlanan Websayt</span>
            </div>
            <div className="achievement">
              <div className="achievement-icon">
                <img src="/imgs/design-complete-icon.svg" alt="" />
              </div>
              <span className="achievement-count">25</span>
              <span className="achievement-text">Dizayn edilmiş</span>
            </div>
            <div className="achievement">
              <div className="achievement-icon">
                <img src="/imgs/socialmedia-complete-icon.svg" alt="" />
              </div>
              <span className="achievement-count">5</span>
              <span className="achievement-text">Sosial Media proyekt</span>
            </div>
            <div className="achievement">
              <div className="achievement-icon">
                <FontAwesomeIcon icon="fa-solid fa-code" />
              </div>
              <span className="achievement-count">7</span>
              <span className="achievement-text">Developer</span>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio-section">
        <div className="container">
          <h3 className="h-title">Sizə necə kömək edə bilərik ?</h3>
          <div id="portfolios-type">
            <div className="portfolio-type">
              <div>
                <h6>Web-Site</h6>
                <div className="portfolio-type-icon">
                  <img src="/imgs/comp-icon.svg" alt="" />
                </div>
              </div>
              <p>
                Məlumatı ötürən və ya ziyarətçilərinə mətn, vizual və animasiya
                şəklində xidmət göstərən bütün səhifələri əhatə edən sənədlər
                toplusudur.
              </p>
            </div>
            <div className="portfolio-type">
              <div>
                <h6>Web-Design</h6>
                <div className="portfolio-type-icon">
                  <img src="/imgs/desg-icon.svg" alt="" />
                </div>
              </div>
              <p>
                Şəkillər və mətnlərdən ibarət veb səhifə məzmununun saytın
                ziyarətçilərinə nizamlı şəkildə təqdim edilməsidir.
              </p>
            </div>
            <div className="portfolio-type">
              <div>
                <h6>Social Media</h6>
                <div className="portfolio-type-icon">
                  <img src="/imgs/socmed-icon.svg" alt="" />
                </div>
              </div>
              <p>
                istifadəçilərin internetdə axtardığı, istifadə etdiyi və
                istehsal etdiyi məzmun
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="about-us">
        <h3 className="h-title">About us</h3>
        <div>
          <div className="about-image">
            <img src="/imgs/comp1.svg" alt="" />
          </div>
          <div className="about-text">
            Fikrinizi uğurlu Tətbiqə çevirin! Biz sizin ehtiyaclarınızı başa
            düşürük, biz hər şeyin qayğısına qalırıq: ağ kağızdan tutmuş dövlət
            və ya özəl mağazalara qədər, ömürlük texniki xidmət göstərməyə
            hazırıq . Proqram təminatı mühəndislərimiz sabit, səmərəli və
            təhlükəsiz web layihələr təqdim etmək üçün bütün ən yaxşı sənaye
            təcrübələrinə sahibdirlər. Həm B2B, həm də B2C üçün proqramlar
            hazırlamaqda geniş təcrübəmiz var. Məqsədiniz müştəri təcrübəsini
            artırmaq və ya daxili proseslərinizi təkmilləşdirmək olsun, biz sizə
            bu yolda uğur qazanmağınıza kömək edəcəyik. Buna görə də biz sizə
            düzgün yola başlamağınıza kömək etmək , məsləhət və texniki-iqtisadi
            əsaslandırma təklif edirik. Ekspertizamız sizə son dərəcə dəyərli
            fikirlər gətirəcək.
          </div>
        </div>
      </section>
      <Subscribe />
    </>
  );
}

export default Homepage;
