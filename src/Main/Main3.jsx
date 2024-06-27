import { Outlet } from "react-router-dom";
import Footer3 from "../Shared/Footer/Footer3";
import Navbar3 from "../Shared/Navbar/Navbar3";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";

const Main3 = () => {
  return (
    <>
      <Navbar3 />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer3 />
    </>
  );
};
export default Main3;
