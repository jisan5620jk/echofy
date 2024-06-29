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
        breadCrumbLink={"Contact Us"}
      />
      <ContactBox />
      <Appointment />
    </>
  );
};

export default ContactInner;
