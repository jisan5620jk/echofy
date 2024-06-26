/* eslint-disable react/prop-types */
const GallaryCard = ({thumb,title,subTitle}) => {
    return (
      <div className="relative before:absolute before:top-0 before:left-0 before:w-full before:h-0 before:transition-all before:duration-500 before:z-10 before:bg-HeadingColor-0 before:bg-opacity-40 hover:before:h-full group">
        <div className="relative">
          <img src={thumb} />
          <div className="absolute z-20 bottom-1/2 left-1/2 -translate-x-1/2 transition-all duration-500 opacity-0 group-hover:bottom-8 group-hover:opacity-100 text-center">
            <h4 className="font-AlbertSans font-medium text-white text-[22px]">
              {title}
            </h4>
            <p className="font-AlbertSans text-white">{subTitle}</p>
          </div>
        </div>
      </div>
    );
};

export default GallaryCard;