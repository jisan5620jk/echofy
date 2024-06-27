import { Link } from "react-router-dom";
import footerLogo from "/images/logo.png";
import footerShape3 from "/images/footer-shape.png";
import footerLine from "/images/footer-line.png";
import { FaArrowRightLong, FaChevronRight, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer2 = () => {
  return (
    <footer className="bg-[url('/images/footer-bg.jpg')] bg-no-repeat bg-center bg-cover relative z-10 pt-28 overflow-hidden">
      <img
        src={footerLine}
        draggable="false"
        className="absolute -z-10 right-0 -bottom-20 opacity-70"
      />
      <img
        src={footerShape3}
        draggable="false"
        className="absolute -z-10 top-0 left-0 animate-dance2"
      />
      <div className="Container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <Link to={""}>
              <img src={footerLogo} draggable={false} />
            </Link>
            <p className="font-AlbertSans text-white mt-7 mb-5">
              Proactively restore timely alignments after client environmentals
            </p>
            <div>
              <h6 className="font-AlbertSans font-medium text-white text-lg pl-8 relative before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-PrimaryColor-0 before:w-[22px] before:h-[2px]">
                Contact
              </h6>
              <Link to={"/"} className="mt-[18px] block">
                <button className="flex items-center gap-3 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0">
                  <FaPhone className="text-PrimaryColor-0" />
                  +123 (4567) 890
                </button>
              </Link>
              <Link to={"/"} className="mt-[18px] block">
                <button className="flex items-center gap-3 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0">
                  <MdEmail size={"18"} className="text-PrimaryColor-0" />
                  example@gmail.com
                </button>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-AlbertSans text-2xl text-white font-semibold mb-[30px]">
              Company
            </h4>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    About Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Our Services
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Meet Our Team
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Latest Blog
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-AlbertSans text-2xl text-white font-semibold mb-[30px]">
              Quick Links
            </h4>
            <ul>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Testimonials
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Contact Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Donations
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 mb-[18px] opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Faq
                  </button>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <button className="flex items-center gap-2 font-AlbertSans text-white transition-all duration-500 hover:text-PrimaryColor-0 hover:gap-1 opacity-60 hover:!opacity-100">
                    <FaChevronRight className="text-xs opacity-60" />
                    Careers
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-AlbertSans text-2xl text-white font-semibold mb-8">
              Newsletter
            </h4>
            <p className="font-AlbertSans text-TextColor-0 font-medium mb-[22px]">
              Subscribe Our Newsletter
            </p>
            <form action="#" method="post">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your E-Mail*"
                required
                className="w-full h-[60px] rounded-full font-AlbertSans border border-PrimaryColor-0 border-opacity-50 bg-transparent px-6 py-2 text-white placeholder:text-white mb-4"
              />
              <button
                type="submit"
                className="w-full h-[58px] rounded-full border border-PrimaryColor-0 bg-PrimaryColor-0 gap-2 px-6 py-2 text-white font-AlbertSans uppercase flex items-center justify-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-[#041e15] before:-z-10 before:scale-0 before:transition-all before:duration-500 hover:before:scale-100"
              >
                Subscribe <FaArrowRightLong />
              </button>
            </form>
          </div>
        </div>
        <div className="text-left sm:text-center py-6 border-t border-BorderColor-0 mt-24">
          <p className="font-AlbertSans text-white">
            © Copyrights 2024 Echofy All rights reserved by
            <span className="text-PrimaryColor-0"> Dream IT</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
