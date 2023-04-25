import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
function ServiceDetail() {
  let { id } = useParams();
  const [serviceData, setServiceData] = useState([]);
  const [relatedBlogs, setRelatefBlogs] = useState([]);
  useEffect(() => {
    const getServiceData = async () => {
      let data = await fetch(
        `https://admin.trustcenterholding.com/service/${id}/`
      ).then((a) => a.json());
      setServiceData(data.service);
      setRelatefBlogs(data.related_blogs);
    };
    getServiceData();
  }, [id]);
  return (
    <>
      <section className="service-detail-section">
        <div className="container">
          <h3 className="h-title">{serviceData.name}</h3>
          <div className="service-detail-image">
            <img src={serviceData.image} alt="" />
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
export default ServiceDetail;
