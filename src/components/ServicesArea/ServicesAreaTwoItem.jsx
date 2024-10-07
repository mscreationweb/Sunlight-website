import React from "react";
import { Link } from "react-router-dom";

const ServicesAreaTwoItem = ({ item }) => {
  return (
    <div className="services-item-two wow fadeInUp" data-wow-delay=".2s"style={{
      marginTop: window.innerWidth > 768 ? '-20px' : '40px'}}>
      {/* <div className="services-icon-two">{item.icon}</div> */}
      {/* <div className="services-icon-two"><img src={item.img} alt="" style={{height:'35px'}} /></div> */}

      <div className="services-content-two" style={{height:'160px', marginTop:'-20px'}}>
        <h2 className="title">
          <Link to={item.url}>{item.title}</Link>
        </h2>

        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default ServicesAreaTwoItem;
