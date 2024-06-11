import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Appointment from "./Appointment/Appointment";
import ContactBox from "./ContactBox";

const ContactInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Contact Us"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbContent={"Contact Us"}
        url={"/contact"}
      />
      <ContactBox />
      <Appointment />
    </>
  );
};

export default ContactInner;
