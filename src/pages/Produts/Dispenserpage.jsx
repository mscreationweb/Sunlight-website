import React, { useEffect } from "react";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import ShopArea from "../../components/ShopAreas/ShopArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import Dispenser from "../../components/ShopAreas/Dispenser";

const Dispenserpage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <Layout header={2} footer={2}>
      <BreadcrumbArea title={" Dispenser & Paper Products"} subtitle={"Shop "} />
      {/* <Cleaning/> */}
      <Dispenser />
    </Layout>
  );
};

export default Dispenserpage;