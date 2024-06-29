/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import { FaArrowRightLong, FaBars } from "react-icons/fa6";
import { BiChevronDown } from "react-icons/bi";
import Logo from "/images/black-logo.png";
import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const Navbar3 = () => {
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
      className={`w-full transition-all duration-300 bg-transparent relative text-[#7d7f8c] z-[99999]`}
    >
      <header data-aos="zoom-in" data-aos-duration="1000">
        <div className="header-section absolute w-full">
          <div className="Container">
            {/* main Navbar */}
            <div className="flex flex-col lg:flex-row items-center justify-between lg:h-[100px] lg:-mb-[100px] -mb-[70px] lg:px-[2%] 2xl:px-[5%] bg-white border-l-[8px] border-PrimaryColor-0 rounded-b-md">
              {/* website Logo */}
              <div>
                <Link to="/">
                  <img
                    draggable="false"
                    src={Logo}
                    className="hidden lg:block w-full"
                    alt="website_logo"
                  />
                </Link>
              </div>
              {/* small screen size */}
              <div className="px-3 w-full lg:hidden flex justify-between bg-khaki h-[70px] items-center p-3">
                <div>
                  <Link to="/">
                    <img
                      draggable="false"
                      src={Logo}
                      className="block lg:hidden"
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
                    <IoMdClose className="w-6 h-6 text-HeadingColor-0" />
                  ) : (
                    <FaBars className="w-5 h-5 text-HeadingColor-0" />
                  )}
                </button>
              </div>
              {/* All navLink are hear with active */}
              <div className="flex gap-6 items-center">
                <ul
                  className={`${
                    isOpen ? "block" : "hidden"
                  } text-right lg:w-fit ease-in-out flex-1 lg:flex space-y-2 lg:space-y-0 space-x-0  flex flex-col lg:flex-row capitalize text-sm lg:bg-transparent py-3 lg:py-0 font-AlbertSans font-medium sm:text-base text-white transition-all duration-500
                `}
                >
                  <NavLink
                    to="/"
                    className={`${({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "active"
                        : ""} text-HeadingColor-0 hover:text-PrimaryColor-0 text-left lg:border-b-0 px-3 lg:px-1 2xl:px-3 py-2 w-full block transition-all duration-300 group relative`}
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
                        <div className="px-5 group hover:bg-PrimaryColor-0 ">
                          <li className="hover:ml-3 duration-300">
                            <Link to="/" className="py-2 block">
                              Home One
                            </Link>
                          </li>
                        </div>
                        <div className="px-5 group hover:bg-PrimaryColor-0 ">
                          <li className="hover:ml-3 duration-300">
                            <Link to="/home2" className="py-2 block">
                              Home Two
                            </Link>
                          </li>
                        </div>
                        <div className="px-5 group hover:bg-PrimaryColor-0 ">
                          <li className="hover:ml-3 duration-300">
                            <Link to="/home3" className="py-2 block">
                              Home Three
                            </Link>
                          </li>
                        </div>
                        <div className="px-5 group hover:bg-PrimaryColor-0 ">
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
                        : ""} text-HeadingColor-0 hover:text-PrimaryColor-0 text-left lg:border-b-0 px-3 lg:px-1 2xl:px-3 py-2 w-full block transition-all duration-300 group relative `}
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
                        : ""} text-HeadingColor-0 hover:text-PrimaryColor-0 text-left lg:border-b-0 px-3 lg:px-1 2xl:px-3 py-2 w-full block transition-all duration-300 group relative `}
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
                              Our Service
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
                        : ""} text-HeadingColor-0 hover:text-PrimaryColor-0 text-left lg:border-b-0 px-3 lg:px-1 2xl:px-3 py-2 w-full block transition-all duration-300 group relative `}
                    to="#"
                  >
                    <span className="flex items-center">
                      Pages
                      <BiChevronDown className="ml-1" />
                    </span>
                    <div className="absolute pt-5 lg:pt-8 z-20">
                      <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-HeadingColor-0 ">
                        <div className="px-5 group hover:bg-PrimaryColor-0 ">
                          <li className="hover:ml-3 duration-300">
                            <Link to="/about" className="py-2 block">
                              About Us
                            </Link>
                          </li>
                        </div>
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
                        <div className="px-5 group hover:bg-PrimaryColor-0">
                          <li className="hover:ml-3 duration-300">
                            <Link to="/donation_inner" className="py-2 block">
                              Donations
                            </Link>
                          </li>
                        </div>
                        <div className="px-5 group hover:bg-PrimaryColor-0 ">
                          <li className="hover:ml-3 duration-300">
                            <Link to="/team_inner" className="py-2 block">
                              Team Member
                            </Link>
                          </li>
                        </div>
                        <div className="px-5 group hover:bg-PrimaryColor-0 ">
                          <li className="hover:ml-3 duration-300">
                            <Link to="/project" className="py-2 block">
                              Projects
                            </Link>
                          </li>
                        </div>
                        <div className="px-5 group hover:bg-PrimaryColor-0 ">
                          <li className="hover:ml-3 duration-300">
                            <Link to="/project_details" className="py-2 block">
                              Project Detials
                            </Link>
                          </li>
                        </div>
                        <div className="px-5 group hover:bg-PrimaryColor-0 ">
                          <li className="hover:ml-3 duration-300">
                            <Link to="/pricing_inner" className="py-2 block">
                              Pricing Plan
                            </Link>
                          </li>
                        </div>
                        <div className="px-5 group hover:bg-PrimaryColor-0 ">
                          <li className="hover:ml-3 duration-300">
                            <Link to="/testimonial" className="py-2 block">
                              Testimonial
                            </Link>
                          </li>
                        </div>
                        <div className="px-5 group hover:bg-PrimaryColor-0 ">
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
                        : ""} text-HeadingColor-0 hover:text-PrimaryColor-0 text-left lg:border-b-0 px-3 lg:px-1 2xl:px-3 py-2 w-full block transition-all duration-300 group relative `}
                    to="#"
                  >
                    <span className="flex items-center">
                      Blog
                      <BiChevronDown className="ml-1" />
                    </span>
                    <div className="absolute pt-5 lg:pt-8 z-20">
                      <ul className="shadow-lg hidden group-hover:block rounded-sm text-white w-[220px] text-left transition-all duration-500 text-sm sm:text-base py-4 bg-SecondaryColor-0 ">
                        <div className="px-5 group hover:bg-PrimaryColor-0 ">
                          <li className="hover:ml-3 duration-300">
                            <Link to="/blog_grid" className="py-2 block">
                              Blog Grid
                            </Link>
                          </li>
                        </div>
                        <div className="px-5 group hover:bg-PrimaryColor-0 ">
                          <li className="hover:ml-3 duration-300">
                            <Link to="/blog_list" className="py-2 block">
                              Blog List
                            </Link>
                          </li>
                        </div>
                        <div className="px-5 group hover:bg-PrimaryColor-0 ">
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
                        : ""} text-HeadingColor-0 text-left lg:border-b-0 px-3 lg:px-1 2xl:px-3 py-2 w-full block transition-all duration-300`}
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </ul>
                <div className="hidden lg:flex items-center lg:gap-4 xl:gap-10">
                  <Link
                    to={"/"}
                    className="w-[40px] h-[40px] bg-[#f4f5f9] transition-all duration-500 hover:bg-PrimaryColor-0 hover:text-white flex items-center justify-center rounded-full text-PrimaryColor-0"
                  >
                    <IoSearch size={"20"} />
                  </Link>
                  <Link to={"/appointment"} className="primary-btn2">
                    Get Solution <FaArrowRightLong />
                  </Link>
                </div>
              </div>
              {/* large device visible button and search icon */}
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar3;
