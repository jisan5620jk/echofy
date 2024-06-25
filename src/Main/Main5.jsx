import { Outlet } from "react-router-dom";
import Footer4 from "../Shared/Footer/Footer4";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";
import Navbar5 from "../Shared/Navbar/Navbar5";

const Main5 = () => {
  return (
    <>
      <Navbar5 />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
      <Footer4 />
    </>
  );
};
export default Main5;
