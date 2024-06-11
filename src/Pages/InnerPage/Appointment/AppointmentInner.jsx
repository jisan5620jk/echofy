import { FaArrowRightLong } from "react-icons/fa6";
import BreadCrumb from "../../../Shared/BreadCrumb/BreadCrumb";
import Support from "../../../Componant1/Support/Support";
import Process from "../../../Componant1/Process/Process";
import Appointment from "./Appoiontment";

const AppointmentInner = () => {
  return (
    <>
      <BreadCrumb
        breadCrumbTitle={"Book Appoinment"}
        breadCrumbIcon={<FaArrowRightLong />}
        breadCrumbContent={"Book Appoinment"}
      />
      <Appointment />
      <Support />
      <Process />
    </>
  );
};

export default AppointmentInner;
