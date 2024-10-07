import React, { useEffect } from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import BrandArea from "../components/BrandArea/BrandArea";
import BreadcrumbArea from "../components/BreadcrumbArea/BreadcrumbArea";
import OurHistory from "../components/OurHistory/OurHistory";
import ServicesAreaSix from "../components/ServicesArea/ServicesAreaSix";
import TeamOne from "../components/Team/TeamOne";
import VideoAreaTwo from "../components/VideoArea/VideoAreaTwo";
import Layout from "../layouts/Layout";
import { gsapTitleAnimation } from "../lib/gsap-lib/gsapTitleAnimation";
import AboutUsTwo from "../components/AboutUs/AboutUsTwo";
import HowWeWork from "../components/HowWeWork/HowWeWork";
import ServicesAreaTwo from "../components/ServicesArea/ServicesAreaTwo";
import Mission from "../components/AboutUs/Mission";

const AboutUsPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <div >
      <Layout header={2} footer={2} >
        <BreadcrumbArea title={"About Us"} subtitle={"About Us"} />
        {/* <AboutUs /> */}
        <AboutUsTwo/>
        <Mission/>
        {/* <HowWeWork/> */}
        {/* <div style={{backgroundColor:"green",marginBottom:"10px"}}> <ServicesAreaTwo/></div> */}
       
        {/* <ServicesAreaSix /> */}
        {/* <VideoAreaTwo /> */}
        {/* <OurHistory /> */}
        {/* <TeamOne /> */}
        {/* <BrandArea className={"inner-brand-area pb-70"} /> */}
      </Layout>
    </div>
  );
};

export default AboutUsPage;
