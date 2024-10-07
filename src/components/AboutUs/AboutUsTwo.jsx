import React from "react";
import { Link } from "react-router-dom";

const AboutUsTwo = () => {
  const facilities = [
    "Chemicals",
   
    "Hygiene & Protective Wears",
    "Disposable products",
    "Dispenser & Paper Products",
    "Garbage Bins & bags",
    "Hotel Amenities",
    "Vacuum Cleaners",
    "Stationeries",
    "Printing Items",
    
    "Cleaning Trolleys & Accessories",
  ];

  return (
    <section className="about-area-two pb-130 mt-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-0 order-lg-2">
            <div className="about-img-two text-center">
              <img src="/img/images/aboutus.webp" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content-two tg-heading-subheading animation-style1">
              <div className="section-title-two mb-20">
                <span className="sub-title">About Us</span>
                <h2 className="title tg-element-title">
                Welcome to Sunlight <br />
                General Trading LLC
                </h2>
              </div>
              <p className="info-one tg-element-title">
              Discover a range of daily essentials crafted for convenience, affordability, and reliability. From personal care to home cleaning, we’ve got everything you need to make life easier.
              </p>
              <p>
              Find the right product for your daily needs and enjoy unmatched quality and convenience
              </p>

              <div className="about-list">
                <ul className="list-wrap">
                  {facilities.map((x, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="content-bottom">
                <Link to="/products" className="btn">
                 Our Products
                </Link>
                <div className="contact">
                  <span className="icon">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <a href="tel:+97143706261">+97143706261</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTwo;
