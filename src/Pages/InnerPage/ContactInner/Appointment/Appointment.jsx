import { FaArrowRightLong } from "react-icons/fa6";
import subTitleShape from "/images/sub-title-shape.png";

const Appointment = () => {
  return (
    <section className="py-[102px] pl-7 lg:pl-0">
      <div className="Container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867283.0267128727!2d34.232606549050644!3d31.8841932044305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cf2d28866bdd9%3A0xee17a001d166f686!2sPalestine!5e0!3m2!1sen!2sbd!4v1715597594739!5m2!1sen!2sbd"
              width="100%"
              height="632"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg w-full"
            ></iframe>
          </div>
          <div className="mr-4">
            <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
              <img src={subTitleShape} draggable="false" />
              GET IN TOUCH
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-5 mb-10">
              Write Us Something
            </h1>
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
              <div className="flex gap-2 text-TextColor-0 font-AlbertSans">
                <input type="checkbox" name="terms" id="terms" />
                <p>I agree with the Terms & Conditions</p>
              </div>
              <div className="inline-block">
                <button type="submit" className="primary-btn2">
                  Submit Message
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
