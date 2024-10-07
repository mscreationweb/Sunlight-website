import React, { useEffect } from "react";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import ShopArea from "../../components/ShopAreas/ShopArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import Cleaning from "../../components/ShopAreas/Cleaning";
import Hygiene from "../../components/ShopAreas/Hygiene";

const Hygienepage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <Layout header={2} footer={2}>
      <BreadcrumbArea title={"  Hygiene & Protective Wears"} subtitle={"Shop "} />
      {/* <Cleaning/> */}
      <Hygiene />
    </Layout>
  );
};

export default Hygienepage;