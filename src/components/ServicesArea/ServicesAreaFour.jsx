import React from "react";
import { BestServiceItemsArray } from "../BestServiceItem/BestServiceItemsArray";
import ServicesAreaFourItem from "./ServicesAreaFourItem";
import SlickSlider from "../SlickSlider/SlickSlider";

const ServicesAreaFour = () => {
  const slick_settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="services-area-four" style={{marginTop:"-120px"}} >
      <div className="container custom-container">
      <div className="row justify-content-center" style={{marginTop:"-70px"}}>
          <div className="col-xl-6 col-lg-7">
            <div className="section-title-two white-title text-center mb-65 tg-heading-subheading animation-style2">
              {/* <span className="sub-title" style={{color:'blue'}}>What We’re Offering</span> */}
              <h2 className="title tg-element-title" style={{color:'blue'}}>
              Providing the Best Products for our Customers

              </h2>
            </div>
          </div>
        </div>

        <div className="row services-active-two">
          <SlickSlider settings={slick_settings}>
            {BestServiceItemsArray.map((x, index) => (
              <div key={index} className="col">
                <ServicesAreaFourItem item={x} />
              </div>
            ))}
          </SlickSlider>
        </div>
      </div>
    </section>
  );
};

export default ServicesAreaFour;
