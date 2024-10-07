import React from "react";
import ServicesAreaTwoItem from "./ServicesAreaTwoItem";

const ServicesAreaTwo = () => {
  const ServicesAreaTwoItemsArray = [
    {
      url: "/services-details",
      title: "OUR MISSION",
      desc: `To provide our customers with exceptional service,
Outstanding product quality of cleaning and janitorial tools
and accessories; to introduce innovative products into the
market and offer our customers the widest range of products.
.
`,
     img:'/img/All sun light/icons/vission.png'
    },
    {
      url: "/services-details",
      title: "OUR VISION",
      desc: `The goal of Sun Lights General Trading L.L.C.
is to continue being a leading supplier of
quality and durable cleaning and janitorial
equipment and accessories with a focus on
customer service.

`
    },
    
  ];

  return (
    <section className="services-area-two pt-100 pb-200">
      <div className="container">
        
        <div className="row justify-content-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title-two text-center mb-20 tg-heading-subheading animation-style1" style={{marginTop:"-120px"}}>
              {/* <span className="sub-title">How we Work</span> */}
              <h2 className="title tg-element-title">How Can We Works!</h2>
            </div>
          </div>
        </div>
          {ServicesAreaTwoItemsArray.map((x, index) => (
            <div key={index} className="col-lg-6 col-md-6">
              <ServicesAreaTwoItem item={x} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesAreaTwo;
