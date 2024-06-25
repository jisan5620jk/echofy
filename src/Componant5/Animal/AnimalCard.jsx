/* eslint-disable react/prop-types */

const AnimalCard = ({ animalIcon, animalTitle, buttonIcon }) => {
  return (
    <div className="rounded-md overflow-hidden bg-[#e6e7e9] text-center relative group pt-10 pb-8 before:absolute before:left-0 before:top-0 before:w-full before:h-0 before:bg-[url('/images/animal-1.png')] before:bg-no-repeat before:bg-cover before:bg-center before:transition-all before:duration-500 hover:before:h-full">
      <div className="w-[80px] h-[80px] bg-white flex justify-center items-center rounded-full m-auto">
        <img src={animalIcon} />
      </div>
      <h4 className="font-AlbertSans font-semibold text-[22px] text-HeadingColor-0 mt-3">
        {animalTitle}
      </h4>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-all duration-500 group-hover:scale-100">
        <button className="h-[45px] w-[45px] rounded-md bg-PrimaryColor-0 flex justify-center items-center relative z-10 m-auto">
          <span className="text-white">
            {buttonIcon}
          </span>
        </button>
      </div>
    </div>
  );
};

export default AnimalCard;
