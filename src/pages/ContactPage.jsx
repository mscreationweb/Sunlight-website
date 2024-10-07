import React, { useEffect } from "react";
import BreadcrumbArea from "../components/BreadcrumbArea/BreadcrumbArea";
import ContactMapArea from "../components/Contact/ContactMapArea";
import ContactPageArea from "../components/Contact/ContactPageArea";
import Layout from "../layouts/Layout";
import { gsapTitleAnimation } from "../lib/gsap-lib/gsapTitleAnimation";

const ContactPage = () => {
  useEffect(() => {
    gsapTitleAnimation();
  }, []);

  return (
    <>
    <Layout header={2} footer={2}>
      <BreadcrumbArea title={"Contact "} subtitle={"Contact Page"} />
      <ContactPageArea />
      <ContactMapArea />
    </Layout>
    </>
  );
};

export default ContactPage;
