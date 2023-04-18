import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
function Blogs() {
  const [blogsData, setBlogsData] = useState([]);
  useEffect(() => {
    const getBlogsData = async () => {
      let data = await fetch("https://admin.trustcenterholding.com/blog/").then(
        (a) => a.json()
      );
      setBlogsData(data);
      console.log(data);
    };
    getBlogsData();
  }, []);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  let itemsPerPage = 8;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(blogsData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(blogsData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, blogsData]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogsData?.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <section id="popular-blogs_and_tags">
        <div className="container">
          <Link to={`/blog/2/`} id="popular-blog">
            <div>
              <h6>ChatGPT nədir?</h6>
              <p>
                ChatGPT OpenAI mühəndisləri tərəfindən hazırlanmış və öyrədilmiş
                chatbot/təlimli modeldir .
              </p>
              <span className="tag-p">Technology</span>
            </div>
          </Link>
          <div id="tags">
            <div className="tag">Design</div>
            <div className="tag">Front-end</div>
            <div className="tag">Back-end</div>
            <div className="tag">Technology</div>
            <div className="tag">Data</div>
            <div className="tag">Product management</div>
            <div className="tag">Learning</div>
            <div className="tag">Software</div>
          </div>
        </div>
      </section>
      <section id="blogs-section">
        <div className="container">
          <h3 className="h-title">Blogs</h3>
          <div id="blogs">
            {currentItems?.map((b, index) => (
              <Link to={`/blog/${b.id}`} className="blog" key={index}>
                <div className="blog-image">
                  <img
                    src={`http://admin.trustcenterholding.com/${b.main_image.slice(
                      20
                    )}`}
                    alt=""
                  />
                  <div className="blog-tags tag">Technology</div>
                </div>
                <div className="blog-text">
                  <span>{b.date} </span>
                  <h5>{b.title}</h5>
                  <p
                    dangerouslySetInnerHTML={{ __html: b.text.slice(0, 180) }}
                  ></p>
                  <span className="more">
                    Read more <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
                  </span>
                </div>
              </Link>
            ))}
            {/* <div className="blog">
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
             */}
          </div>
          <div className="blog-pagination">
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="< "
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
