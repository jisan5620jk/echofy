/* eslint-disable react/prop-types */
import CountUp from "react-countup";

const CounterCard = ({
  counterIcon,
  counterNumber,
  counterDesc,
  counterDesc2,
  counterSuffex,
}) => {
  return (
    <div className="text-center relative z-10 pl-[80px]">
      <div>
        <h1
          className="counter-stroke font-AlbertSans text-transparent text-[150px] absolute top-1/2 -translate-y-1/2 left-0 opacity-20 -z-10"
        >
          {counterIcon}
        </h1>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          <CountUp
            start={-11}
            end={counterNumber}
            suffix={counterSuffex}
            className="font-AlbertSans text-[70px] text-white font-bold"
          />
        </div>
        <div className="!block text-left">
          <p className="font-AlbertSans text-white font-medium uppercase">
            {counterDesc}
          </p>
          <p className="font-AlbertSans text-white font-semibold text-[22px]">
            {counterDesc2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CounterCard;
