import React from "react";
import { Link } from "react-router-dom";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container" style={{display:'flex',justifyContent:"center"}}>
        <div className="row">
          <div className="col-lg-12 col-md-7">
            <div className="copyright-text">
              <p>
              © 2024 <Link to="/">SUN LIGHTS</Link> Designed By <Link to="https://mscreation.tech/" target="blank">MS Creation</Link> 
              </p>
            </div>
          </div>

          {/* <div className="col-lg-6 col-md-5">
            <div className="footer-bottom-menu">
              <ul className="list-wrap">
                <li>
                  <Link to="/contact">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/contact">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
