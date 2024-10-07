import React from "react";

const ContactMapArea = () => {
  return (
    <div id="contact-map" style={{marginBottom:"130px"}}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1850530.61220608!2d52.85851332243956!3d25.05722229653497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1726275309088!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};
export default ContactMapArea;
