/* eslint-disable react/prop-types */
import CountUp from "react-countup";

const CounterCard = ({
  counterIcon,
  counterNumber,
  counterDesc,
  counterSuffex,
}) => {
  return (
    <div className="text-center">
      <div>
        <img src={counterIcon} draggable="false" className="m-auto" />
      </div>
      <div className="mt-3 -mb-1">
        <CountUp
          start={-11}
          end={counterNumber}
          suffix={counterSuffex}
          className="font-AlbertSans text-[46px] text-white font-bold"
        />
      </div>
      <p className="font-AlbertSans text-white text-xl">{counterDesc}</p>
    </div>
  );
};

export default CounterCard;
