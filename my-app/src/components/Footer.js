import React from "react";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
export default function Footer() {
  return (
    <>
      <div className="footer-16371" id="/about">
        <div className="row justify-content-center">
          <div className="text-center">
            <div className=" mb-4">
              <Link className="navbar-brand" to="/">
                <strong>Text</strong>Utils
              </Link>
              <h5 style={{ color: "#e8ce76", paddingTop: "20px" }}>
                The professional web tool for analysing texts
              </h5>
            </div>

            <ul className="list-unstyled nav-links mb-5">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">Press</Link>
              </li>
              <li>
                <Link to="/">Careers</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Legal</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>

            <div className="icons_container pt-3">
              <div className="icon facebook">
                <div className="tooltip">Facebook</div>
                <span>
                  <i className="fab fa-facebook-f"></i>
                </span>
              </div>
              <div className="icon twitter">
                <div className="tooltip">Twitter</div>
                <span>
                  <i className="fab fa-twitter"></i>
                </span>
              </div>
              <div className="icon instagram">
                <div className="tooltip">Instagram</div>
                <span>
                  <i className="fab fa-instagram"></i>
                </span>
              </div>
              <div className="icon github">
                <div className="tooltip">Github</div>
                <span>
                  <i className="fab fa-github"></i>
                </span>
              </div>
              <div className="icon youtube">
                <div className="tooltip">YouTube</div>
                <span>
                  <i className="fab fa-youtube"></i>
                </span>
              </div>
            </div>
            <div className="arrow"></div>
            <div className="copyright">
              <p className="pt-4">
                <small>&copy; TextUtils. All Rights Reserved.</small>
              </p>
              <div onClick={() => scroll.scrollToTop()}>
                <a href="/" className="to-top  fixed-bottom"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
