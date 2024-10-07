import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Iframe from "react-iframe";

const IntroductionAreaOne = () => {
  return (
    <section id="intro" className="introduction-area pb-130 mt-70 mb-50" > 
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="introduction-img-wrap">
              <img src="/img/All sun light/Homepage/Round - Big.webp" alt="" />
              <img
                src="/img/All sun light/Homepage/Round - Small.webp"
                data-aos="fade-right"
                alt=""
              />

              {/* <Popup
                trigger={
                  <div className="play-btn">
                    <a
                      href="#intro"
                      className="popup-video"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                }
                position=""
                modal={true}
              >
                <Iframe
                  url="https://www.youtube.com/embed/XMWYZ-uZjnQ"
                  width="100%"
                  height="350px"
                  id=""
                  className=""
                  display="block"
                  position="relative"
                />
              </Popup> */}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="introduction-content">
              <div className="section-title-two mb-20 tg-heading-subheading animation-style2">
                <span className="sub-title">Our Introduction</span>
                <h2 className="title tg-element-title">
                Welcome to Sunlight <br />
                General Trading LLC
                </h2>
              </div>

              {/* <p className="info-one">
                Lorem ipsum dolor sit amet consectetur suspendisse nulla
                aliquam. Risus rutrum tellus ultrices amet facilisis.
              </p> */}
              <p>
              Discover a range of daily essentials crafted for convenience, affordability, and reliability. From personal care to home cleaning, we’ve got everything you need to make life easier.
              </p>
{/* 
              <div className="introduction-list">
              <h4 className="title tg-element-title">
              Simplify Your Routine with Sunlight General Trading LLC. Designed for Daily Use
                </h4>
                <ul className="list-wrap">
                  <li>
                    <i className="fas fa-check-circle"></i>Chemicals

                  </li>
                 
                  <li>
                    <i className="fas fa-check-circle"></i>Dispenser & Paper Products

                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Hygiene & Protective Wears

                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Disposable products

                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>Garbage Bins & bags

                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Hotel Amenities

                    </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Vacuum Cleaners

                    </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Stationeries

                    </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Printing Items

                    </li>
                     <li style={{display:'flex'}}>
                    <i className="fas fa-check-circle" ></i>Cleaning Trolleys & Accessories
                  </li>
                </ul>
              </div> */}

              <div className="introduction-bottom mt-20" >
                <Link to="/about" className="btn">
                  Discover MORE
                </Link>

                {/* <span className="call-now">
                  <i className="fas fa-phone-alt"></i>
                  <a href="tel:+97143706261">+971 437 06261</a>
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionAreaOne;
