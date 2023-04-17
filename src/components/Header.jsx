import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo1 from "../images/logos1.jpeg";
function Header() {
  const headerRef = useRef();
  const navbarRef = useRef();
  useEffect(() => {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        headerRef.current.classList.add("scroll");
      } else {
        headerRef.current.classList.remove("scroll");
      }
    });
  }, []);
  const BurgerShow = (e) => {
    let inp = e.target;
    if (e.target.checked) {
      navbarRef.current.style.transform = "translateX(100%)";
      console.log("salam");
      document.body.style.overflow = "hidden";
    } else {
      navbarRef.current.style.transform = "translateX(0)";
      document.body.style.overflow = "auto";
    }
    [...navbarRef.current.querySelectorAll("a")].map((n) => {
      n.addEventListener("click", () => {
        navbarRef.current.style.transform = "translateX(0)"
        inp.checked = inp.unchecked;
        document.body.style.overflow = "auto";
      });
    });
    console.log(navbarRef.current.querySelectorAll("a"));
  };
  return (
    <>
      <header ref={headerRef}>
        <div className="container">
          <Link to='/' className="logo">
            <img src={logo1} alt="" />
          </Link>
          <div id="header-right">
            <div className="nav-container">
              <label htmlFor="brg">
                <input type="checkbox" name="" id="brg" onClick={BurgerShow} />
                <div className="hamburger-lines">
                  <span className="line line1"></span>
                  <span className="line line2"></span>
                  <span className="line line3"></span>
                </div>
              </label>
            </div>
            <ul ref={navbarRef}>
              <li>
                <Link to="/">Ana səhifə</Link>
              </li>
              <li>
                <Link to="/service">Servislər</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/blogs">Bloq</Link>
              </li>
              <li>
                <Link to="/contact">Bizimlə Əlaqə</Link>
              </li>
              <li>
                <Link to="/about">Haqqımızda</Link>
              </li>
            </ul>
            {/* <select defaultValue="Az">
              <option value="Az">Az</option>
              <option value="Eng">Eng</option>
              <option value="Ru">Ru</option>
            </select> */}
          </div>
        </div>
      </header>
      <button className="order-button">Sifariş et</button>
    </>
  );
}

export default Header;
