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
          className="flex items-center justify-between pl-4 pr-2 md:pl-7 md:pr-6 lg:pl-6 lg:pr-4 xl:pl-7 xl:pr-6 py-6 w-full text-left font-semibold font-AlbertSans hover:bg-PrimaryColor-0 transition-all duration-500 group bg-white active:bg-PrimaryColor-0"
          onClick={(e) => {
            e.preventDefault();
            setAccordionOpen(!accordionOpen);
          }}
          aria-expanded={accordionOpen}
          aria-controls={`accordion-text-${id}`}
        >
          <span
            className={`text-HeadingColor-0 transition duration-400 group-hover:text-SecondaryColor-0 text-base sm:text-lg md:text-xl lg:text-base xl:text-xl flex flex-1${
              accordionOpen && "!text-white brightness-0 invert-[1]"
            }`}
          >
            <img src={faqIcon} className="w-[inherit]" />
            <span className="flex-1">{title}</span>
          </span>
          <svg
            className={`fill-HeadingColor-0 bg-white transition duration-400 p-2 group-hover:fill-SecondaryColor-0 shrink-0 ${
              accordionOpen && " !fill-SecondaryColor-0"
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
        className={`grid font-AlbertSans font-light leading-[26px] text-TextColor-0 bg-white px-4 md:px-10 lg:px-6 xl:px-10 overflow-hidden transition-all duration-300 ease-in-out bg-normalBlack ${
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
