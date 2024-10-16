import React from "react";
import ContactForm from "./ContactForm";

const ContactPageArea = () => {
  return (
    <section className="contact-area pt-130 pb-130">
      <div className="container">
        <div className="inner-contact-info-wrap">
          <div className="row justify-content-center" >
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="inner-contact-info-item">
                <div className="icon">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <div className="content">
                  <a href="tel:971 4 3706261">+971 437 062 61</a>
                  <a href="tel:971 522 735 200">+971 522 735 200</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="inner-contact-info-item">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="content">
                  <a href="mailto:info@sunlightsuae.com">info@sunlightsuae.com</a>
                  {/* <a href="mailto:Envato@gmail.com">Envato@gmail.com</a> */}
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="inner-contact-info-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="content">
                  <p>
                  310968, Dubai, united Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-area">
          <div className="row align-items-center g-0">
            <div className="col-lg-6">
              <div className="contact-img">
                <img src="/img/images/contact_img.jpg" alt="" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-content">
                <h2 className="title">Contact for Services</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageArea;
