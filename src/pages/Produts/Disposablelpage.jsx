import React, { useEffect } from "react";
import BreadcrumbArea from "../../components/BreadcrumbArea/BreadcrumbArea";
import ShopArea from "../../components/ShopAreas/ShopArea";
import Layout from "../../layouts/Layout";
import { gsapTitleAnimation } from "../../lib/gsap-lib/gsapTitleAnimation";
import Cleaning from "../../components/ShopAreas/Cleaning";
import Disposablel from "../../components/ShopAreas/Disposablel";

const Disposablelpage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <Layout header={2} footer={2}>
      <BreadcrumbArea title={"Disposable Products"} subtitle={"Shop "} />
      {/* <Cleaning/> */}
      <Disposablel />
    </Layout>
  );
};

export default Disposablelpage;