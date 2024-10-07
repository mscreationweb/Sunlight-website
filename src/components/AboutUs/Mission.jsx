import React from "react";
import { Link } from "react-router-dom";

const Mission = ({ item }) => {
  return (
    <div className="blog-item-two">
      {/* <div className="blog-thumb-two">
        <Link to={item.url}>
          <img src={item.src2} alt="" />
        </Link>
      </div> */}
      
  <div className="row justify-content-center mt-5 " style={{marginBottom:'150px'}} >
  <div className="col-lg-6 col-md-6 mb-5">
    <div className="blog-content-two"  id="mission">
      <h5 className="tag">OUR MISSION</h5>
      <div className="blog-meta">
        <ul className="list-wrap">
          <li >
            To provide our customers with exceptional service, outstanding product quality of cleaning and janitorial tools and accessories; to introduce innovative products into the market and offer our customers the widest range of products.
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div className="col-lg-6 col-md-6">
    <div className="blog-content-two">
      <h5 className="tag">OUR VISION</h5>
      <div className="blog-meta">
        <ul className="list-wrap">
          <li>
            The goal of Sun Lights General Trading L.L.C. is to continue being a leading supplier of quality and durable cleaning and janitorial equipment and accessories with a focus on customer service.
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>


      
    </div>
  );
};

export default Mission;
