import { useState, useEffect } from "react";

/* eslint-disable react/prop-types */
const PricingAccordion = ({ children, faqIcon, title, id, active = false }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  useEffect(() => {
    setAccordionOpen(active);
  }, []);

  return (
    <div className="mb-5 rounded-md overflow-hidden">
      <h2>
        <button
          className="faq-button flex items-center justify-between pl-4 pr-2 md:pl-7 md:pr-6 lg:pl-6 lg:pr-4 xl:pl-7 xl:pr-6 py-5 w-full text-left font-medium font-AlbertSans hover:bg-PrimaryColor-0 transition-all duration-500 group bg-white"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span
            className={`text-HeadingColor-0 transition !leading-5 duration-400 group-hover:text-white text-base sm:text-lg md:text-xl lg:text-base xl:text-xl flex items-center gap-4 ${
              accordionOpen && "!text-white"
            }`}
          >
            <img src={faqIcon} className="w-8 h-[18px] transition-all duration-500" />
            <span className="border-l-2 border-BorderColor2-0 pl-4">
              {title}
            </span>
          </span>
          <svg
            className={`fill-HeadingColor-0 bg-transparent transition duration-400 p-2 group-hover:fill-white shrink-0 ${
               accordionOpen && " !fill-white"
             }`}
            width="26"
            height="26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="4"
              width="14"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="4"
              width="14"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid font-AlbertSans font-light leading-[26px] text-TextColor-0 bg-white px-4 md:px-7 lg:px-6 xl:px-7 pt-6 overflow-hidden transition-all duration-300 ease-in-out bg-normalBlack ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-sm sm:text-base font-Archivo">{children}</p>
        </div>
      </div>
    </div>
  );
};

export default PricingAccordion;
