import CounterCard from "./CounterCard";

const counterData = [
  {
    id: 1,
    counterIcon: "34",
    counterNumber: 34,
    counterDesc: "Happy",
    counterDesc2: "Clients",
    counterSuffex: "",
  },
  {
    id: 2,
    counterIcon: "98",
    counterNumber: 98,
    counterDesc: "Completed",
    counterDesc2: "Projects",
    counterSuffex: "",
  },
  {
    id: 3,
    counterIcon: "65",
    counterNumber: 65,
    counterDesc: "Projects",
    counterDesc2: "Codes",
    counterSuffex: "",
  },
  {
    id: 4,
    counterIcon: "78",
    counterNumber: 78,
    counterDesc: "Effective",
    counterDesc2: "Teams",
    counterSuffex: "",
  },
];

const Counter = () => {
  return (
    <section className="py-[70px] bg-PrimaryColor-0">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-0 lg:grid-cols-4 items-center justify-center">
          {counterData.map(
            ({
              id,
              counterIcon,
              counterNumber,
              counterDesc,
              counterDesc2,
              counterSuffex,
            }) => {
              return (
                <div key={id}>
                  <CounterCard
                    counterIcon={counterIcon}
                    counterNumber={counterNumber}
                    counterDesc={counterDesc}
                    counterDesc2={counterDesc2}
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
