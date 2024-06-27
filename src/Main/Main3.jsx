import { Outlet } from "react-router-dom";
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
    </>
  );
};
export default Main3;
