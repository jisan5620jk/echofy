import { BiSearch } from "react-icons/bi";
import "./header-search.css";
import { FaArrowUp } from "react-icons/fa6";

const Search = () => {
  if (document.querySelector(".search-box-outer")) {
    document
      .querySelector(".search-box-outer")
      .addEventListener("click", () => {
        document.body.classList.add("search-active");
      });
    document
      .querySelector(".close-search")
      .addEventListener("click", () => {
        document.body.classList.remove("search-active");
      });
  }

  return (
    <div className="search-popup">
      <button className="close-search">
        <FaArrowUp />
      </button>
      <form method="post" action="#">
        <div className="form-group">
          <input
            type="search"
            name="search"
            placeholder="Search here..."
            required
          />
          <button type="submit">
            <BiSearch />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
