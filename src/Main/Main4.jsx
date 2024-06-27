import { Outlet } from "react-router-dom";
import Navbar4 from "../Shared/Navbar/Navbar4";
import ScrollToTop from "../Shared/ScrollToTop/ScrollToTop";

const Main4 = () => {
  return (
    <>
      <Navbar4 />
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default Main4;
