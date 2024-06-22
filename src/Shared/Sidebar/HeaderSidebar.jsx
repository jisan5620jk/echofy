/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import logo from "/images/black-logo.png";
import thumb from "/images/blog-list.png";
import thumb2 from "/images/blog-list.png";
import thumb3 from "/images/blog-list.png";
import thumb4 from "/images/blog-list.png";
import thumb5 from "/images/blog-list.png";
import thumb6 from "/images/blog-list.png";
import "./header-sidebar.css";
import { MdOutlineClose } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const HeaderSidebar = () => {
  (() => {
    const offsetSideBar = document.querySelector(".offset-side-bar");
    const closeSideWidget = document.querySelector(".close-side-widget");
    const navSidebarButton = document.querySelector(".nav-sidebar-button");
    const infoGroup = document.querySelector(".info-group");
    const cartGroup = document.querySelector(".cart-group");
    const xsSidebarWidget = document.querySelector(".xs-sidebar-widget");
    const xsModalPopup = document.querySelector(".xs-modal-popup");

    const addClickListener = (element, callback) => {
      if (element) {
        element.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          callback();
        });
      }
    };

    addClickListener(offsetSideBar, () => cartGroup.classList.add("isActive"));
    addClickListener(closeSideWidget, () =>
      cartGroup.classList.remove("isActive")
    );

    addClickListener(navSidebarButton, () => {
      infoGroup.classList.add("isActive");
      e.stopPropagation();
    });

    addClickListener(closeSideWidget, () =>
      infoGroup.classList.remove("isActive")
    );

    document.body.addEventListener("click", () => {
      infoGroup.classList.remove("isActive");
      cartGroup.classList.remove("isActive");
    });

    if (xsSidebarWidget) {
      xsSidebarWidget.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }

    if (xsModalPopup) {
      xsModalPopup.addEventListener("click", (e) => {
        e.stopPropagation();
      });

      // Initialize Magnific Popup
      const $ = window.jQuery; // Assuming jQuery is used for the Magnific Popup
      $(".xs-modal-popup").magnificPopup({
        type: "inline",
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: "auto",
        closeBtnInside: false,
        callbacks: {
          beforeOpen: function () {
            this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
          },
        },
      });
    }
  })();

  return (
    <div className="xs-sidebar-group info-group">
      <div className="xs-overlay xs-bg-black"></div>
      <div className="xs-sidebar-widget">
        <div className="sidebar-widget-container">
          <div className="widget-heading">
            <Link to="#" className="close-side-widget">
              <MdOutlineClose />
            </Link>
          </div>
          <div className="sidebar-textwidget">
            <div className="sidebar-info-contents">
              <div className="content-inner">
                <div className="nav-logo">
                  <Link to="index-2.html">
                    <img src={logo} />
                  </Link>
                </div>
                <div className="widget-search">
                  <div className="widget">
                    <form action="#" method="POST">
                      <input
                        id="search2"
                        type="text"
                        name="s"
                        value=""
                        placeholder="Search Product"
                        title="Search for:"
                      />
                      <button type="submit" className="icon">
                        <BsSearch />
                      </button>
                    </form>
                  </div>
                </div>
                <div className="product-category">
                  <h3 className="widget-title">Product Categories</h3>
                  <ul className="list-style-one">
                    <li>
                      <Link to="/blog_details">
                        Cute Cat <span>10</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog_details">
                        White Cat <span>1</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog_details">
                        Asian Cat <span>8</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog_details">
                        British Cat <span>8</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog_details">
                        Cat Food <span>15</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog_details">
                        Baby Cat <span>11</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog_details">
                        Frappuccino Coffe <span>6</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog_details">
                        Americano Cat <span>10</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog_details">
                        Cat Soup <span>5</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog_details">
                        Adult CAt <span>2</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog_details">
                        All Categories <span>1</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="recent-gallery">
                  <h3 className="widget-title">Recent Post</h3>
                  <ul>
                    <li>
                      <div className="widget-gallery-thumb">
                        <Link to="/blog_details">
                          <img src={thumb} />
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="widget-gallery-thumb">
                        <Link to="/blog_details">
                          <img src={thumb2} />
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="widget-gallery-thumb">
                        <Link to="/blog_details">
                          <img src={thumb3} />
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="widget-gallery-thumb">
                        <Link to="/blog_details">
                          <img src={thumb4} />
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="widget-gallery-thumb">
                        <Link to="/blog_details">
                          <img src={thumb5} />
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div className="widget-gallery-thumb">
                        <Link to="/blog_details">
                          <img src={thumb6} />
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
                <h3 className="widget-title">Tags</h3>
                <div className="sidebar-tag-item">
                  <ul>
                    <li>
                      <Link to="#">Cat Bed</Link>
                    </li>
                    <li>
                      <Link to="#">Cats</Link>
                    </li>
                    <li>
                      <Link to="#">Cat Soup Container</Link>
                    </li>
                    <li>
                      <Link to="#">Cat Food</Link>
                    </li>
                    <li>
                      <Link to="#">Cat Soup</Link>
                    </li>
                  </ul>
                </div>
                <div className="category-icon">
                  <h3 className="widget-title">Shere with Friends</h3>
                  <div className="follow-company-icon style-two">
                    <Link to="#">
                      <FaFacebookF />
                    </Link>
                    <Link to="#">
                      <FaXTwitter />
                    </Link>
                    <Link to="#">
                      <FaLinkedinIn />
                    </Link>
                    <Link to="#">
                      <FaInstagram />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSidebar;
