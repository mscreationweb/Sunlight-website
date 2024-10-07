import React, { useEffect } from "react";
import AboutUs from "../../components/AboutUs/AboutUs";
import BlogAreaOne from "../../components/Blogs/BlogAreaOne";
import BrandArea from "../../components/BrandArea/BrandArea";
import ContactAreaOne from "../../components/Contact/ContactAreaOne";
import CounterAreaOne from "../../components/CounterAreas/CounterAreaOne";
import ProjectAreaOne from "../../components/ProjectAreas/ProjectAreaOne";
import ServicesArea from "../../components/ServicesArea/ServicesArea";
import SliderAreaOne from "../../components/SliderArea/SliderAreaOne";
import TeamOne from "../../components/Team/TeamOne";
import TestimonialAreaOne from "../../components/Testimonials/TestimonialAreaOne";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import IntroductionAreaOne from "../../components/Introduction/IntroductionAreaOne";
import ServicesAreaThree from "../../components/ServicesArea/ServicesAreaThree";
import ServicesAreaFour from "../../components/ServicesArea/ServicesAreaFour";

const HomeFour = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={2} footer={2} topHeaderClassName={""}>
        <SliderAreaOne />
        {/* <AboutUs /> */}
        <IntroductionAreaOne/>
        <ServicesAreaFour/>
        {/* <ServicesAreaThree/> */}
        {/* <ServicesArea /> */}
        {/* <TeamOne /> */}
        {/* <CounterAreaOne /> */}
        {/* <ProjectAreaOne /> */}
        {/* <TestimonialAreaOne /> */}
        {/* <BrandArea /> */}
        {/* <ContactAreaOne /> */}
        {/* <BlogAreaOne /> */}
      </Layout>
    </>
  );
};

export default HomeFour;
