import React, { useEffect } from "react";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import ShopArea from "../../components/ShopAreas/ShopArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import Cleaning from "../../components/ShopAreas/Cleaning";
import Garbage from "../../components/ShopAreas/Garbage";

const Garbagepage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <Layout header={2} footer={2}>
      <BreadcrumbArea title={"Garbage Bins & Bags"} subtitle={"Shop "} />
      {/* <Cleaning/> */}
      <Garbage/>
    </Layout>
  );
};

export default Garbagepage;