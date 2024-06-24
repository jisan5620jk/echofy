import { Link } from "react-router-dom";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

const ContactBox = () => {
    return (
      <section>
        <div className="Container mt-[120px]">
          <div className="bg-PrimaryColor-0 rounded-xl text-center pt-10 pb-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <div className="group border-r-2 border-[#bbdd7f]">
              <div className="w-[80px] h-[80px] flex items-center justify-center bg-white rounded-full text-PrimaryColor-0 relative m-auto z-10 transition-all duration-500 group-hover:text-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100 after:absolute after:-top-[11px] after:-left-[11px] after:w-[102px] after:h-[102px] after:border-2 after:border-white after:rounded-full after:opacity-50 after:animate-ping">
                <FaLocationDot size={"30"} />
              </div>
              <h5 className="font-AlbertSans font-medium text-[22px] text-white mt-6 mb-3">
                Office Address
              </h5>
              <p className="font-AlbertSans text-white">
                200 Navana ST, West end Right <br /> Sandigo, USA
              </p>
            </div>
            <div className="group border-r-2 border-[#bbdd7f]">
              <div className="w-[80px] h-[80px] flex items-center justify-center bg-white rounded-full text-PrimaryColor-0 relative m-auto z-10 transition-all duration-500 group-hover:text-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100 after:absolute after:-top-[11px] after:-left-[11px] after:w-[102px] after:h-[102px] after:border-2 after:border-white after:rounded-full after:opacity-50 after:animate-ping">
                <FaPhoneVolume size={"30"} />
              </div>
              <h5 className="font-AlbertSans font-medium text-[22px] text-white mt-6 mb-3">
                Make A Call
              </h5>
              <ul>
                <li>
                  <Link to={"/"}>
                    <button className="font-AlbertSans text-white transition-all duration-500 hover:text-SecondaryColor-0 mb-2">
                      (+880) 123 4567 890
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button className="font-AlbertSans text-white transition-all duration-500 hover:text-SecondaryColor-0">
                      (+880) 312 4567 670
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="group">
              <div className="w-[80px] h-[80px] flex items-center justify-center bg-white rounded-full text-PrimaryColor-0 relative m-auto z-10 transition-all duration-500 group-hover:text-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-SecondaryColor-0 before:transition-all before:duration-500 before:scale-0 before:-z-10 before:rounded-full group-hover:before:scale-100 after:absolute after:-top-[11px] after:-left-[11px] after:w-[102px] after:h-[102px] after:border-2 after:border-white after:rounded-full after:opacity-50 after:animate-ping">
                <BiSupport size={"30"} />
              </div>
              <h5 className="font-AlbertSans font-medium text-[22px] text-white mt-6 mb-3">
                24/7 Online Support
              </h5>
              <ul>
                <li>
                  <Link to={"/"}>
                    <button className="font-AlbertSans text-white transition-all duration-500 hover:text-SecondaryColor-0 mb-2">
                      example@gmail.com
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>
                    <button className="font-AlbertSans text-white transition-all duration-500 hover:text-SecondaryColor-0">
                      info@gmail.com
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ContactBox;