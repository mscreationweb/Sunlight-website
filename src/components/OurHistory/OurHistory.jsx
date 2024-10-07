import { jarallax } from "jarallax";
import React, { useEffect, useRef } from "react";
import { bgImgFromData } from "../../lib/helpers";
import SlickSlider from "../SlickSlider/SlickSlider";
import OurHistoryItem from "./OurHistoryItem";

const OurHistory = () => {
  useEffect(() => {
    bgImgFromData();
  }, []);

  // jarallax
  useEffect(() => {
    jarallax(document.querySelectorAll(".jarallax"), {
      speed: 0.2,
    });
  }, []);

  const sliderRef = useRef();

  const slick_settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
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

  const history_data = [
    {
      year: 2018,
      title: "We already branches across the country",
      desc: `Lorem dolor consectetur tellus suspendisse nulla aliquam at the ultrices the pretium`,
    },
    {
      year: 2019,
      title: "Cleaning Authority for a Free Estimate",
      desc: `Lorem dolor consectetur tellus suspendisse nulla aliquam at the ultrices the pretium`,
    },
    {
      year: 2020,
      title: "We made a profit of $1 million per month",
      desc: `Lorem dolor consectetur tellus suspendisse nulla aliquam at the ultrices the pretium`,
    },
    {
      year: 2021,
      title: "We already branches across the country",
      desc: `Lorem dolor consectetur tellus suspendisse nulla aliquam at the ultrices the pretium`,
    },
    {
      year: 2022,
      title: "We made a profit of $1 million per month",
      desc: `Lorem dolor consectetur tellus suspendisse nulla aliquam at the ultrices the pretium`,
    },
  ];

  return (
    <section
      className="history-area history-bg has-animation jarallax"
      data-background="/img/bg/history_bg.jpg"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6">
            <div className="section-title white-title text-center mb-50">
              <span className="sub-title">
                <svg
                  viewBox="0 0 41 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M35.2826 37.5886C36.6662 36.9737 38.8185 36.205 40.8939 36.205C38.8185 36.205 36.6662 35.4363 35.2826 34.8213C34.6676 33.4377 33.8989 31.2854 33.8989 29.21C33.8989 31.2854 33.1303 33.4377 32.5153 34.8213C31.1317 35.4363 28.9794 36.205 26.9039 36.205C28.9794 36.205 31.1317 36.9737 32.5153 37.5886C33.1303 38.9722 33.8989 41.1246 33.8989 43.2C33.8989 41.1246 34.6676 38.9722 35.2826 37.5886Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M31.2085 13.5288C33.4377 12.5295 36.8968 11.2996 40.279 11.2996C36.8968 11.2996 33.4377 10.0698 31.2085 9.07046C30.2093 6.84128 28.9794 3.38221 28.9794 0C28.9794 3.38221 27.7495 6.84128 26.7502 9.07046C24.521 10.0698 21.0619 11.2996 17.6797 11.2996C21.0619 11.2996 24.521 12.5295 26.7502 13.5288C27.7495 15.758 28.9794 19.2171 28.9794 22.5993C28.9794 19.2171 30.2093 15.758 31.2085 13.5288Z"
                    fill="currentcolor"
                  />
                  <path
                    d="M16.6036 31.7467C19.2939 30.5936 23.5986 28.9794 27.6726 28.9794C23.5986 28.9794 19.2939 27.442 16.6036 26.2121C15.3737 23.5986 13.8363 19.294 13.8363 15.22C13.8363 19.294 12.2989 23.5986 11.069 26.289C8.37865 27.442 4.07402 29.0563 0 29.0563C4.07402 29.0563 8.37865 30.5936 11.069 31.8235C12.2989 34.4371 13.8363 38.7417 13.8363 42.8926C13.8363 38.7417 15.3737 34.4371 16.6036 31.7467Z"
                    fill="currentcolor"
                  />
                </svg>
                Our History
              </span>
              <h2 className="title">
                You can Check our Company{" "}
                <span>
                  Timeline.
                  <svg
                    viewBox="0 0 173 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 22.9998C8.5 14.2152 90 -14 172 14.2148"
                      stroke-width="3"
                    />
                  </svg>
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="history-item-wrap">
          <div className="row history-active position-relative">
            <SlickSlider ref={sliderRef} settings={slick_settings}>
              {history_data.map((x, index) => (
                <div key={index} className="col-lg-3">
                  <OurHistoryItem item={x} />
                </div>
              ))}
            </SlickSlider>
          </div>

          <div className="history-nav ">
            <button
              type="button"
              className="slick-prev slick-arrow"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button
              type="button"
              className="slick-next slick-arrow"
              onClick={() => sliderRef.current.slickNext()}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
