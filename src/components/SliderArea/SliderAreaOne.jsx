import SlickSlider from "../SlickSlider/SlickSlider";
import SliderAreaOneItem from "./SliderAreaOneItem";
import $ from "jquery";
import { doAnimations } from "../../lib/helpers";

const SliderAreaOne = () => {
  const slick_settings = {
    autoplay: false,
    autoplaySpeed: 10000,
    dots: true,
    fade: true,
    arrows: false,
    responsive: [{ breakpoint: 767, settings: { dots: false, arrows: false } }],
    onInit: () => {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );
      doAnimations($firstAnimatingElements);
    },
    beforeChange: (currentSlide, nextSlide) => {
      var $animatingElements = $(
        '.single-slider[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    },
  };

  const slider_area_one_items = [
    {
      bg: "/img/slider/Banner.jpg",
      subtitle: "",
      title: "Providing high quality, everyday essentials that make life easier",
    }
  ];

  return (
    <section className="slider-area">
      <div className="slider-active">
        <SlickSlider settings={slick_settings}>
          {slider_area_one_items.map((x, index) => (
            <SliderAreaOneItem key={index} item={x} />
          ))}
        </SlickSlider>
      </div>
    </section>
  );
};

export default SliderAreaOne;
