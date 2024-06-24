import FaqAccordion from "./FaqAccordion";
import faqIcon from "/images/faq-icon.png";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
import { FaStarOfLife } from "react-icons/fa6";

const Faq = () => {
  //  All Faqs and  answers.
  const faqs = [
    {
      faqIcon: faqIcon,
      title: "How to Cleaning Sea Beach Properly?",
      text: "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high",
      active: true,
    },
    {
      faqIcon: faqIcon,
      title: "How to save earth using trees?",
      text: "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high",
      active: false,
    },
    {
      faqIcon: faqIcon,
      title: "When Seedlings a Plants?",
      text: "Distinctively plagiarize ubiquitous mindshare goal-oriented collaboration idea-sharing. Efficiently transition dynamic initiatives to business testing procedures enthusiastically negotiate high",
      active: false,
    },
  ];

  const [toggler, setToggler] = useState(false);

  return (
    <section
      className="relative overflow-hidden py-28 bg-[url('/images/faqs-bg.jpg')] bg-cover bg-no-repeat
     bg-left lg:bg-center"
    >
      <div className="Container">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 items-center">
          <div className="w-full mx-auto">
            <h5 className="font-AlbertSans font-medium text-PrimaryColor-0 flex items-center gap-2">
              <FaStarOfLife />
              FAQ
            </h5>
            <h1 className="font-AlbertSans font-bold text-[22px] leading-8 sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[32px] lg:leading-[42px] xl:text-[40px] xl:leading-[50px] 2xl:text-[46px] 2xl:leading-[56px] text-HeadingColor-0 mt-2 mb-[50px]">
              Freequently Asked <br />
              Questions
            </h1>
            <div>
              {faqs.map((faq, index) => (
                <FaqAccordion
                  key={index}
                  faqIcon={faq.faqIcon}
                  title={faq.title}
                  id={`faqs-${index}`}
                  active={faq.active}
                >
                  {faq.text}
                </FaqAccordion>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2">
              <button
                className="h-[96px] w-[96px] rounded-full text-lg font-AlbertSans font-medium text-white uppercase bg-PrimaryColor-0 flex justify-center items-center relative z-10 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-HeadingColor-0 before:opacity-50 before:-z-10 before:rounded-full before:animate-ping"
                onClick={() => setToggler(!toggler)}
              >
                Play
              </button>
            </div>
            <FsLightbox
              toggler={toggler}
              sources={[
                "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
