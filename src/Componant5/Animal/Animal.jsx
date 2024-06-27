import { FaPlus } from "react-icons/fa6";
import AnimalCard from "./AnimalCard";
import animalIcon from "/images/animal-icon1.png";
import animalIcon2 from "/images/animal-icon-2.png";
import animalIcon3 from "/images/animal-icon-3.png";
import animalIcon4 from "/images/animal-icon-4.png";
import animalIcon5 from "/images/animal-icon-5.png";
import animalIcon6 from "/images/animal-icon-5.png";

const ServiceData = [
  {
    id: 1,
    animalIcon: animalIcon,
    animalTitle: "Giraffes",
    buttonIcon: <FaPlus />,
  },
  {
    id: 2,
    animalIcon: animalIcon2,
    animalTitle: "Tigers",
    buttonIcon: <FaPlus />,
  },
  {
    id: 3,
    animalIcon: animalIcon3,
    animalTitle: "Lions",
    buttonIcon: <FaPlus />,
  },
  {
    id: 4,
    animalIcon: animalIcon4,
    animalTitle: "Elephants",
    buttonIcon: <FaPlus />,
  },
  {
    id: 5,
    animalIcon: animalIcon5,
    animalTitle: "Giraffes",
    buttonIcon: <FaPlus />,
  },
  {
    id: 6,
    animalIcon: animalIcon6,
    animalTitle: "Orangutans",
    buttonIcon: <FaPlus />,
  },
];

const Animal = () => {
  return (
    <section className="relative pt-[160px] pb-[120px] bg-[#f5f5f5] bg-cover bg-no-repeat bg-center">
      <div className="Container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-7 items-center">
          {ServiceData.map(({ id, animalIcon, animalTitle, buttonIcon }) => {
            return (
              <div key={id}>
                <AnimalCard
                  animalIcon={animalIcon}
                  animalTitle={animalTitle}
                  buttonIcon={buttonIcon}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Animal;
