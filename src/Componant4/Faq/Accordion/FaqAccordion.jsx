import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";

/* eslint-disable react/prop-types */
const PricingAccordion = ({ children, title, id, active = false }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, []);

  return (
    <div className="mb-5 rounded-md">
      <h2>
        <button
          className="faq2-button relative rounded-t-md flex items-center justify-between pl-4 pr-2 md:pl-7 md:pr-6 lg:pl-6 lg:pr-4 xl:pl-8 xl:pr-6 pt-[22px] w-full text-left font-medium font-AlbertSan transition-all duration-500 group bg-white border border-BorderColor2-0 hover:border-transparent"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span
            className={`text-HeadingColor-0 transition !leading-5 duration-400 group-hover:text-PrimaryColor-0 text-base sm:text-lg md:text-xl lg:text-base xl:text-xl flex items-center gap-4 border-b border-transparent w-full pb-[26px] hover:border-b-BorderColor2-0  ${
              accordionOpen &&
              "!text-PrimaryColor-0 border-b-BorderColor2-0 "
            }`}
          >
            <span>{title}</span>
          </span>
          <span className="bg-PrimaryColor-0 flex justify-center items-center w-[46px] h-[46px] rounded-full absolute top-1/2 -translate-y-1/2 -right-[23px]">
            <FaAngleDown
              className={`bg-transparent transition duration-400 text-white ${
                accordionOpen && " rotate-180"
              }`}
            />
          </span>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid font-AlbertSans font-light leading-[26px] text-TextColor-0 bg-white px-4 md:px-7 lg:px-6 xl:px-7 overflow-hidden transition-all duration-300 ease-in-out bg-normalBlack ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 pt-6 text-sm sm:text-base font-AlbertSans">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingAccordion;
