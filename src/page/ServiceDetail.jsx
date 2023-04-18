import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
function ServiceDetail() {
  let { id } = useParams();
  const [serviceData, setServiceData] = useState([]);
  const [relatedBlogs, setRelatefBlogs] = useState([]);
  useEffect(() => {
    const getServiceData = async () => {
      // `https://admin.trustcenterholding.com/service/${id}/`
      let data = await fetch(`https://admin.trustcenterholding.com/service/${id}/`).then((a) =>
        a.json()
      );
      setServiceData(data.service);
      console.log(data);
    };
    getServiceData();
  }, []);
  return (
    <>
      <section className="service-detail-section">
        <div className="container">
          <h3 className="h-title">{serviceData.name}</h3>
          <div className="service-detail-image">
            <img src={`https://admin.trustcenterholding.com/${serviceData.image?.slice(20)}`} alt="" />
          </div>
          <div className="service-detail-texts">
            <p className="service-detail-text">{serviceData?.text}</p>
          </div>
        </div>
      </section>
      {relatedBlogs.length ? (
        <section className="related-blogs">
          <div className="container">
            <h3 className="h-title">Related Blogs</h3>
            <div className="row-blogs">
              <div className="row-blog">
                <div className="row-blog-image">
                  <img src="/imgs/service-example.svg" alt="" />
                </div>
                <div className="row-blog-text">
                  <div>
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <span className="blog-date">1 Month Ago</span>
                  </div>
                  <p>
                    The CSS Grid Layout Module offers a grid-based layout
                    system, with rows and columns, making it easier to design
                    web pages without
                  </p>
                  <span className="more">
                    Read Full <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </span>
                </div>
              </div>
              <div className="row-blog">
                <div className="row-blog-image">
                  <img src="/imgs/service-example.svg" alt="" />
                </div>
                <div className="row-blog-text">
                  <div>
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <span className="blog-date">1 Month Ago</span>
                  </div>
                  <p>
                    The CSS Grid Layout Module offers a grid-based layout
                    system, with rows and columns, making it easier to design
                    web pages without
                  </p>
                  <span className="more">
                    Read Full <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </span>
                </div>
              </div>
              <div className="row-blog">
                <div className="row-blog-image">
                  <img src="/imgs/service-example.svg" alt="" />
                </div>
                <div className="row-blog-text">
                  <div>
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <span className="blog-date">1 Month Ago</span>
                  </div>
                  <p>
                    The CSS Grid Layout Module offers a grid-based layout
                    system, with rows and columns, making it easier to design
                    web pages without
                  </p>
                  <span className="more">
                    Read Full <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

{
  /* <p className="service-detail-text">
              Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p className="service-detail-text">
              Curabitur tempus urna at turpis condimentuobortis.Korem ipsum
              dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
              et velit interdum, ac aliquet odio mattis. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </p>
            <p className="service-detail-text">
              Curabitur tempus urna at turpis condimentum lobortis.Korem ipsum
              dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
              et velit interdum, ac aliquet odio mattis. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.Korem ipsum dolor sit amet, consectetur adipiscing elit.
            </p> */
}
export default ServiceDetail;
