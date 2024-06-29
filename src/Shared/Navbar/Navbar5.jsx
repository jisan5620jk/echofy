/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import {
  FaAnglesRight,
  FaBars,
  FaFacebookF,
  FaLinkedinIn,
  FaPhone,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
import Logo from "/images/logo.png";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMailOpen } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";

const Navbar5 = () => {
  //sticky

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */

  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  // modal openar

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`w-full transition-all duration-300 bg-transparent absolute z-[99999]`}
    >
      {/* top Navbar */}
      <header className="bg-transparent overflow-hidden md:block">
        <div className="Container flex items-center justify-between h-[50px]">
          <div className="flex items-center gap-5">
            <p className="font-AlbertSans text-[15px] text-white -mr-3">
              Phone :
            </p>
            <Link
              to={"/"}
              className="font-AlbertSans text-[15px] text-white flex items-center gap-2"
            >
              +980 123 (4567) 000
            </Link>
            <Link
              to={"/"}
              className="font-AlbertSans text-[15px] text-white md:flex items-center gap-2 hidden"
            >
              +980 123 (4567) 000
            </Link>
          </div>
          <div className="flex gap-3 xl:gap-[52px] items-center">
            <ul className="lg:flex gap-2 xl:gap-[26px] hidden">
              <li>
                <Link to={"/"}>
                  <button className="font-AlbertSans text-[15px] text-white">
                    Membership
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-AlbertSans text-[15px] text-white">
                    Education
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-AlbertSans text-[15px] text-white">
                    Zoo Map
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-AlbertSans text-[15px] text-white">
                    Events
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-AlbertSans text-[15px] text-white">
                    Donate
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="font-AlbertSans text-[15px] text-white">
                    Foundation
                  </button>
                </Link>
              </li>
            </ul>
            <form action="#" method="get">
              <select
                name="select"
                id="select"
                className="bg-transparent cursor-pointer text-white border-none outline-0 hidden sm:block"
              >
                <option value="english" className="text-HeadingColor-0">
                  English
                </option>
                <option value="bangla" className="text-HeadingColor-0">
                  Bangla
                </option>
                <option value="arabic" className="text-HeadingColor-0">
                  Arabic
                </option>
                <option value="china" className="text-HeadingColor-0">
                  China
                </option>
              </select>
            </form>
          </div>
        </div>
      </header>
      {/* top Navbar */}
      <header
        className="header-section bg-transparent border-t border-b border-BorderColor4-0"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="Container">
          {/* main Navbar */}
          <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[100px] ">
            {/* website Logo */}
            <div className=" w-48 lg:w-52">
              <Link to="/">
                <img
                  draggable="false"
                  src={Logo}
                  className="hidden lg:block"
                  alt="website_logo"
                />
              </Link>
            </div>
            {/* small screen size */}
            <div className="px-3 w-full lg:hidden flex justify-between bg-khaki h-[70px] items-center p-3">
              <div className="w-28">
                <Link to="/">
                  <img
                    draggable="false"
                    src={Logo}
                    className="block lg:hidden "
                    alt="constre_website_logo"
                  />
                </Link>
              </div>
              {/* toggle bar mode. */}
              <button
                className="lg:hidden block focus:outline-none "
                onClick={toggleNavbar}
              >
                {/* modal open and close */}
                {isOpen ? (
                  <IoMdClose className="w-6 h-6 text-white" />
                ) : (
                  <FaBars className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
            {/* All navLink are hear with active */}
            <div className="flex gap-6 items-center">
              <ul
                className={`${
                  isOpen ? "block" : "hidden"
                } text-right lg:w-fit ease-in-out flex-1 lg:flex space-y-2 lg:space-y-0 space-x-0 flex flex-col lg:flex-row capitalize text-sm lg:bg-transparent py-3 lg:py-0 font-AlbertSans font-medium sm:text-base text-white transition-all duration-500
                `}
              >
                <NavLink
                  to="/"
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative`}
                >
                  <span className="flex items-center">
                    Home
                    <BiChevronDown className="ml-1" />
                  </span>
                  <div
                    className="absolute pt-5 lg:pt-8 z-[1]"
                    data-aos="zoom-in-left"
                    data-aos-duration="1000"
                  >
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-PrimaryColor-0 ">
                      <div className="px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/" className="py-2 block">
                            Home One
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/home2" className="py-2 block">
                            Home Two
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/home3" className="py-2 block">
                            Home Three
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/home4" className="py-2 block">
                            Home Four
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-SecondaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/home5" className="py-2 block">
                            Home Five
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink>
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative `}
                  to="/about"
                >
                  <span>About</span>
                </NavLink>
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative `}
                  to="#"
                >
                  <span className="flex items-center">
                    Service
                    <BiChevronDown className="ml-1" />
                  </span>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-HeadingColor-0 ">
                      <div className="px-5 group hover:bg-PrimaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/service" className="py-2 block">
                            Service
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0 ">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/service_details" className="py-2 block">
                            Service Details
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink>

                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative `}
                  to="#"
                >
                  <span className="flex items-center">
                    Pages
                    <BiChevronDown className="ml-1" />
                  </span>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-HeadingColor-0 ">
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/about" className="py-2 block">
                            About Us
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/service" className="py-2 block">
                            Service
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/service_details" className="py-2 block">
                            Service Details
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/donation_inner" className="py-2 block">
                            Donations
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/team_inner" className="py-2 block">
                            Team Member
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/project" className="py-2 block">
                            Projects
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/project_details" className="py-2 block">
                            Project Details
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/pricing_inner" className="py-2 block">
                            Pricing Plan
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/testimonial" className="py-2 block">
                            Testimonial
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/appointment" className="py-2 block">
                            Appointment
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/faq_inner" className="py-2 block">
                            Faq
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink>
                {/* blog sub menu link */}
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white text-left hover:text-PrimaryColor-0 lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300 group relative `}
                  to="#"
                >
                  <span className="flex items-center">
                    Blog
                    <BiChevronDown className="ml-1" />
                  </span>
                  <div className="absolute pt-5 lg:pt-8 z-20">
                    <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0">
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/blog_grid" className="py-2 block">
                            Blog Grid
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/blog_list" className="py-2 block">
                            Blog List
                          </Link>
                        </li>
                      </div>
                      <div className="px-5 group hover:bg-PrimaryColor-0">
                        <li className="hover:ml-3 duration-300">
                          <Link to="/blog_details" className="py-2 block">
                            Blog Details
                          </Link>
                        </li>
                      </div>
                    </ul>
                  </div>
                </NavLink>
                <NavLink
                  className={`${({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "active"
                      : ""} text-white text-left lg:border-b-0 px-3 lg:px-2 xl:px-3 w-full block transition-all duration-300`}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </ul>
              <div className="hidden lg:flex items-center">
                <Link to={"/appointment"} className="primary-btn3">
                  Get A Quote
                  <FaAnglesRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar5;
