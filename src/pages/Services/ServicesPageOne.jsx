import React, { useEffect } from "react";
import BrandArea from "../../components/BrandArea/BrandArea";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import IntroductionAreaTwo from "../../components/Introduction/IntroductionAreaTwo";
import ServicesArea from "../../components/ServicesArea/ServicesArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import ProjectAreaTwo from "../../components/ProjectAreas/ProjectAreaTwo";
import ProjectAllMasonry from "../../components/ProjectAreas/ProjectAllMasonry";

const ServicesPageOne = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
      <Layout header={2} footer={2}>
        <BreadcrumbArea title={"All Services"} subtitle={"All Services"} />
        <ProjectAreaTwo/> 

        <ProjectAllMasonry/>
        {/* <ServicesArea /> */}
        {/* <IntroductionAreaTwo /> */}
        {/* <BrandArea className={"inner-brand-area pb-70"} /> */}
      </Layout>
    </>
  );
};

export default ServicesPageOne;
