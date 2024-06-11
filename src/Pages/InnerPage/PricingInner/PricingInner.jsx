import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Pricing from "../../../Componant1/Pricing/Pricing";
import PricingFaq from "./Accordion/PricingFaq";

const PricingInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Affordable Price"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbContent={"Pricing"}
      />
      <Pricing />
      <div>
        <PricingFaq />
      </div>
    </>
  );
};

export default PricingInner;
