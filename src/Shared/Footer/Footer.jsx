import { Link } from "react-router-dom";
import footerLogo from "/public/images/logo.png";
import {
  FaChevronRight,
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaXTwitter,
} from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-HeadingColor-0 relative z-10 pt-28">
      <div className="Container">
        <div className="flex items-center justify-between bg-[url('/public/images/footer-social.jpg')] bg-no-repeat bg-cover bg-center rounded-md p-10">
          <div><h2>Stay With Us On Social</h2></div>
          <div className="flex items-center gap-3">
            <h5>Follow Us:</h5>
            <ul className="flex gap-3">
              <li>
                <button className="w-10 h-10 rounded-full border-2 border-[#334899] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaFacebookF />
                </button>
              </li>
              <li>
                <button className="w-10 h-10 rounded-full border-2 border-[#334899] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaXTwitter />
                </button>
              </li>
              <li>
                <button className="w-10 h-10 rounded-full border-2 border-[#334899] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaLinkedinIn />
                </button>
              </li>
              <li>
                <button className="w-10 h-10 rounded-full border-2 border-[#334899] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaPinterestP />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <img src={footerLogo} />
            <p className="font-AlbertSans text-white mt-7 mb-9">
              Competently repurpose forward conveniently target e-business
              multipurpose clean
            </p>
            <ul className="flex gap-3">
              <li>
                <button className="w-10 h-10 rounded-full border-2 border-[#334899] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaFacebookF />
                </button>
              </li>
              <li>
                <button className="w-10 h-10 rounded-full border-2 border-[#334899] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaXTwitter />
                </button>
              </li>
              <li>
                <button className="w-10 h-10 rounded-full border-2 border-[#334899] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaLinkedinIn />
                </button>
              </li>
              <li>
                <button className="w-10 h-10 rounded-full border-2 border-[#334899] flex items-center justify-center text-white overflow-hidden transition-all duration-500 hover:border-SecondaryColor-0 relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:-z-10 before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 hover:before:scale-100">
                  <FaPinterestP />
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-AlbertSans text-2xl text-white font-semibold mb-[30px]">
              Company
            </h4>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-4">
                    <FaChevronRight className="text-sm opacity-50" />
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-4">
                    <FaChevronRight className="text-sm opacity-50" />
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-4">
                    <FaChevronRight className="text-sm opacity-50" />
                    Our Services
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-4">
                    <FaChevronRight className="text-sm opacity-50" />
                    Meet Our Team
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1">
                    <FaChevronRight className="text-sm opacity-50" />
                    Latest Blog
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-AlbertSans text-2xl text-white font-semibold mb-9">
              Latest Blog
            </h4>
            <div className="flex items-center gap-5 mb-8">
              <div className="flex-1">
                <Link to={"/"}>
                  <button className="font-AlbertSans font-medium text-white text-left xl:text-base 2xl:text-lg transition-all duration-500 hover:text-PrimaryColor-0">
                    10 Most Popular Clean Tips for Housey
                  </button>
                </Link>
                <p className="font-AlbertSans text-[#808CBF] text-sm pl-4 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-[#808CBF] mt-2">
                  Nov 16, 2024
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex-1">
                <Link to={"/"}>
                  <button className="font-AlbertSans font-medium text-white text-left xl:text-base 2xl:text-lg transition-all duration-500 hover:text-PrimaryColor-0">
                    10 Most Popular Clean Tips for Housey
                  </button>
                </Link>
                <p className="font-AlbertSans text-[#808CBF] text-sm pl-4 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-[#808CBF] mt-2">
                  Nov 16, 2024
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-AlbertSans text-2xl text-white font-semibold mb-10">
              Latest Blog
            </h4>
            <div className="flex gap-5 mb-5">
              <div className="h-[44px] w-[44px] rounded-full border border-dashed border-[#43559F] flex items-center justify-center text-white text-xl bg-[#183088]">
                <IoLocationOutline />
              </div>
              <div className="flex-1 -mt-1">
                <h6 className="font-AlbertSans font-medium text-[17px] text-white">
                  Address
                </h6>
                <p className="font-AlbertSans text-[15px] text-[#B9BBD2] mt-[6px]">
                  102/B Philosophy Market Road California, USA
                </p>
              </div>
            </div>
            <div className="flex gap-5 mb-5">
              <div className="h-[44px] w-[44px] rounded-full border border-dashed border-[#43559F] flex items-center justify-center text-white text-xl bg-[#183088]">
                <FiPhoneCall />
              </div>
              <div className="flex-1 -mt-1">
                <h6 className="font-AlbertSans font-medium text-[17px] text-white">
                  Call Us
                </h6>
                <p className="font-AlbertSans text-[15px] text-[#B9BBD2] mt-[6px]">
                  +880 123 (4567) 890
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="h-[44px] w-[44px] rounded-full border border-dashed border-[#43559F] flex items-center justify-center text-white text-xl bg-[#183088]">
                <HiOutlineMail />
              </div>
              <div className="flex-1 -mt-1">
                <h6 className="font-AlbertSans font-medium text-[17px] text-white">
                  Email
                </h6>
                <p className="font-AlbertSans text-[15px] text-[#B9BBD2] mt-[6px]">
                  example@yahoo.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-left sm:text-center py-6 border-t border-[#334899] mt-24">
          <p className="font-AlbertSans text-white">
            © Copyrights 2024 echofy All rights reserved by
            <span className="text-PrimaryColor-0"> Dream IT</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
