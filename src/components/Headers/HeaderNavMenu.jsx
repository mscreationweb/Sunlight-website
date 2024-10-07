import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

const HeaderNavMenu = () => {
  const { pathname } = useLocation();

  const isActiveClassName = (path) => {
    return path === pathname ? "active" : "";
  };

  return (
    <div className="navbar-wrap main-menu d-none d-lg-flex">
      <ul className="navigation">
        {/* <li
          className={cn("menu-item-has-children", {
            active: ["/", "/home-2", "/home-3", "/home-4"].includes(pathname),
          })}
        >
          <a href="#">Home</a>
          <ul className="sub-menu">
            <li className={cn(isActiveClassName("/"))}>
              <Link to="/">Home One</Link>
            </li>
            <li className={cn(isActiveClassName("/home-2"))}>
              <Link to="/home-2">Home Two</Link>
            </li>
            <li className={cn(isActiveClassName("/home-3"))}>
              <Link to="/home-3">Home Three</Link>
            </li>
            <li className={cn(isActiveClassName("/home-4"))}>
              <Link to="/home-4">Home Four</Link>
            </li>
          </ul>
        </li> */}
        <li className={cn(isActiveClassName("/"))}>
          <Link to="/">Home</Link>
        </li>
        <li className={cn(isActiveClassName("/about"))}>
          <Link to="/about">About Us</Link>
        </li>
        {/* <li className={cn(isActiveClassName("/about"))}>
        <Link to="/services">Our Products</Link>
        </li> */}
        <li className={cn(isActiveClassName("/products"))}>
        <Link to="/products">Our Products</Link>
        </li>
        {/* <li
          className={cn("menu-item-has-children", {
            active: ["/services", "/services-2", "/services-details"].includes(
              pathname
            ),
          })}
        >
          <a href="#">Services</a>
          <ul className="sub-menu">
            <li className={cn(isActiveClassName("/services"))}>
              <Link to="/services">Services One</Link>
            </li>
            <li className={cn(isActiveClassName("/services-2"))}>
              <Link to="/services-2">Services Two</Link>
            </li>
            <li className={cn(isActiveClassName("/services-details"))}>
              <Link to="/services-details">Services Details</Link>
            </li>
          </ul>
        </li> */}
        {/* <li
          className={cn("menu-item-has-children", {
            active: [
              "/project",
              "/project-two",
              "/project-details",
              "/team",
              "/team-details",
              "/estimate",
            ].includes(pathname),
          })}
        >
          <a href="#">Pages</a>
          <ul className="sub-menu">
            <li className={cn(isActiveClassName("/project"))}>
              <Link to="/project">Project One</Link>
            </li>
            <li className={cn(isActiveClassName("/project-two"))}>
              <Link to="/project-two">Project Two</Link>
            </li>
            <li className={cn(isActiveClassName("/project-details"))}>
              <Link to="/project-details">Project Details</Link>
            </li>
            <li className={cn(isActiveClassName("/team"))}>
              <Link to="/team">Team Page</Link>
            </li>
            <li className={cn(isActiveClassName("/team-details"))}>
              <Link to="/team-details">Team Details</Link>
            </li>
            <li className={cn(isActiveClassName("/estimate"))}>
              <Link to="/estimate">Estimate Page</Link>
            </li>
          </ul>
        </li> */}
        {/* <li
          className={cn("menu-item-has-children", {
            active: ["/shop", "/shop-details"].includes(pathname),
          })}
        >
          <a href="#">Shop</a>
          <ul className="sub-menu">
            <li className={cn(isActiveClassName("/shop"))}>
              <Link to="/services">Shop Page</Link>
            </li>
            <li className={cn(isActiveClassName("/shop-details"))}>
              <Link to="/shop-details">Shop Details</Link>
            </li>
          </ul>
        </li> */}
        {/* <li
          className={cn("menu-item-has-children", {
            active: ["/blog", "/blog-list", "/blog-details"].includes(pathname),
          })}
        >
          <a href="#">News</a>
          <ul className="sub-menu">
            <li className={cn(isActiveClassName("/blog"))}>
              <Link to="/blog">Our Blog</Link>
            </li>
            <li className={cn(isActiveClassName("/blog-list"))}>
              <Link to="/blog-list">Blog List</Link>
            </li>
            <li className={cn(isActiveClassName("/blog-details"))}>
              <Link to="/blog-details">Blog Details</Link>
            </li>
          </ul>
        </li> */}
        <li className={cn(isActiveClassName("/contact"))}>
          <Link to="/contact">contacts</Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNavMenu;
