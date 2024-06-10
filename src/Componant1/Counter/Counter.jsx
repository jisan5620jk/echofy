import CounterCard from "./CounterCard";
import counterIcon from "/images/counter-icon.png";
import counterIcon2 from "/images/counter-icon2.png";
import counterIcon3 from "/images/counter-icon3.png";
import counterIcon4 from "/images/counter-icon4.png";

const counterData = [
  {
    id: 1,
    counterIcon: counterIcon,
    counterNumber: 100,
    counterDesc: "Team Member",
    counterSuffex: "+",
  },
  {
    id: 2,
    counterIcon: counterIcon2,
    counterNumber: 960,
    counterDesc: "Complete works",
    counterSuffex: "+",
  },
  {
    id: 3,
    counterIcon: counterIcon3,
    counterNumber: 38,
    counterDesc: "Awards Winnig",
    counterSuffex: "",
  },
  {
    id: 4,
    counterIcon: counterIcon4,
    counterNumber: 4,
    counterDesc: "Avg. Ratings",
    counterSuffex: ".7",
  },
];

const Counter = () => {
  return (
    <section className="py-28 bg-[url('/images/counter-bg.png')] bg-no-repeat bg-cover bg-center">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-0 lg:grid-cols-4 items-center justify-center">
          {counterData.map(
            ({
              id,
              counterIcon,
              counterNumber,
              counterDesc,
              counterSuffex,
            }) => {
              return (
                <div key={id}>
                  <CounterCard
                    counterIcon={counterIcon}
                    counterNumber={counterNumber}
                    counterDesc={counterDesc}
                    counterSuffex={counterSuffex}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Counter;
