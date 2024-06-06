import { FaArrowRightLong } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <section className="py-28 relative bg-[linear-gradient(to_right,_rgba(121,185,0,1)_50%,_rgba(255,255,255,1)_50%)] before:absolute before:bottom-0 before:left-0 before:w-full before:h-2 before:bg-PrimaryColor-0 before:-z-10 after:absolute after:right-0 after:top-0 after:h-full after:w-2 after:bg-PrimaryColor-0 after:-z-10">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative text-center">
            <div className="w-[110px] h-[110px] border text-white border-dashed border-white rounded-full flex justify-center items-center m-auto">
              <FiPhoneCall size={"50"} />
            </div>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-white mt-9 mb-11">
              Dial for a Consultation
              <br />
              on the House!
            </h1>
            <Link to={"/about"} className="flex justify-center">
              <button className="primary-btn2 !border-white !border">
                Contact Now
                <FaArrowRightLong size={"20"} />
              </button>
            </Link>
          </div>
          <div className="mr-2">
            <h2 className="font-AlbertSans font-bold text-3xl md:text-[40px] mb-11">
              Request A Quote
            </h2>
            <form action="#" method="post" className="flex flex-col gap-7">
              <div className="flex flex-col md:flex-row gap-7">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name*"
                  required
                  className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                />
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Your Number"
                  className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-7">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your E-Mail*"
                  required
                  className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                />
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your Address"
                  className="border border-BorderColor2-0 rounded py-2 px-6 outline-none h-[56px] w-full"
                />
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Write A Message..."
                className="border border-BorderColor2-0 rounded py-2 px-6 outline-none resize-none h-[140px] w-full"
              ></textarea>
              <div className="inline-block">
                <button type="submit" className="primary-btn2">
                  Submit Now
                  <FaArrowRightLong size={"20"} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;