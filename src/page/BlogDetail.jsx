import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
function BlogDetail() {
  let { id } = useParams();
  const [blogData, setBlogData] = useState({});
  useEffect(() => {
    const getBlogsData = async () => {
      let data = await fetch(
        `https://admin.trustcenterholding.com/blog/${id}/`
      ).then((a) => a.json());
      console.log(data);
      setBlogData(data.blog);
    };
    getBlogsData();
  }, [id]);
  return (
    <>
      <section className="blog-detail-section">
        <div className="container">
          {/* <div className="blog-detail-top"> */}
          <h3 className="h-title">{blogData.title}</h3>
          <div className="blog-author-div">
            <div className="author-detail">
              <div className="author-image">
                <img src="/imgs/blog-author.svg" alt="" />
              </div>
              <div className="author-text">
                <h6>{blogData.author?.name}</h6>
                <span>Author</span>
              </div>
            </div>
            <div className="blog-date_and_read">
              <span className="blog-detail-date">{blogData.date}</span>
              <span>
                <FontAwesomeIcon icon="fa-solid fa-eye" /> 20 reads
              </span>
            </div>
          </div>
          {/* </div> */}
          <div className="blog-detail-image">
            <img
              src={blogData.main_image}
              alt=""
            />
          </div>
          <div
            className="blog-detail-text"
            dangerouslySetInnerHTML={{ __html: blogData.text }}
          >
            {/* <p>
              Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <p>
              Curabitur tempus urna at turpis condimentuobortis.Korem ipsum
              dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
              et velit interdum, ac aliquet odio mattis. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos.
            </p>
            <p>
              Curabitur tempus urna at turpis condimentum lobortis.Korem ipsum
              dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
              et velit interdum, ac aliquet odio mattis. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.Korem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h4>The CSS Grid Layout Module offers</h4>
            <p>
              Curabitur tempus urna at turpis condimentum lobortis.Korem ipsum
              dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
              et velit interdum, ac aliquet odio mattis. Class aptent taciti
            </p>
            <p>
              Curabitur tempus urna at turpis condimentum lobortis.Korem ipsum
              dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
              et velit interdum, ac aliquet odio mattis. Class aptent taciti
            </p> */}
          </div>
          {/* <div className="blog-detail-images">
            <div className="blog-other-image">
              <img src="/imgs/blog1-example.svg" alt="" />
            </div>
            <div className="blog-other-image">
              <img src="/imgs/blog1-example.svg" alt="" />
            </div>
          </div> */}
        </div>
      </section>
      {/* <section id="blogs-section">
        <div className="container">
          <h3 className="h-title">Blogs</h3>
          <div id="blogs">
            <div className="blog">
              <div className="blog-image">
                <img src="/imgs/blog1-example.svg" alt="" />
                <div className="blog-tags tag">Design</div>
              </div>
              <div className="blog-text">
                <span>1 Month Ago </span>
                <h5>Lorem ipsum dolor sit amet</h5>
                <p>
                  The CSS Grid Layout Module offers a grid-based layout system,
                  with rows and columns, making it easier to design web pages
                  without
                </p>
                <span className="more">
                  Read more <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </span>
              </div>
            </div>
            <div className="blog">
              <div className="blog-image">
                <img src="/imgs/blog1-example.svg" alt="" />
                <div className="blog-tags tag">Design</div>
              </div>
              <div className="blog-text">
                <span>1 Month Ago </span>
                <h5>Lorem ipsum dolor sit amet</h5>
                <p>
                  The CSS Grid Layout Module offers a grid-based layout system,
                  with rows and columns, making it easier to design web pages
                  without
                </p>
                <span className="more">
                  Read more <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </span>
              </div>
            </div>
            <div className="blog">
              <div className="blog-image">
                <img src="/imgs/blog1-example.svg" alt="" />
                <div className="blog-tags tag">Design</div>
              </div>
              <div className="blog-text">
                <span>1 Month Ago </span>
                <h5>Lorem ipsum dolor sit amet</h5>
                <p>
                  The CSS Grid Layout Module offers a grid-based layout system,
                  with rows and columns, making it easier to design web pages
                  without
                </p>
                <span className="more">
                  Read more <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </span>
              </div>
            </div>
            <div className="blog">
              <div className="blog-image">
                <img src="/imgs/blog1-example.svg" alt="" />
                <div className="blog-tags tag">Design</div>
              </div>
              <div className="blog-text">
                <span>1 Month Ago </span>
                <h5>Lorem ipsum dolor sit amet</h5>
                <p>
                  The CSS Grid Layout Module offers a grid-based layout system,
                  with rows and columns, making it easier to design web pages
                  without
                </p>
                <span className="more">
                  Read more <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default BlogDetail;
