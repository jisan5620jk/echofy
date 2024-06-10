import { FaArrowRightLong } from "react-icons/fa6";

const Appointment = () => {
  return (
    <section className="relative border-l-8 border-r-8 border-b-8 border-PrimaryColor-0 pl-7 lg:pl-0 pb-8 lg:pb-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d867283.0267128727!2d34.232606549050644!3d31.8841932044305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cf2d28866bdd9%3A0xee17a001d166f686!2sPalestine!5e0!3m2!1sen!2sbd!4v1715597594739!5m2!1sen!2sbd"
            width="100%"
            height="684"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mr-4 xl:mr-[45px] 2xl:mr-[19.5rem]">
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
    </section>
  );
};

export default Appointment;
