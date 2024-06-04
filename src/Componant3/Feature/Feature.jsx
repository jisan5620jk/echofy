/* eslint-disable no-unused-vars */
import featureIcon from "/public/images/feature-icon-4.png";
import featureShape from "/public/images/feature-shape.png";
import featureIcon2 from "/public/images/feature-icon-5.png";
import featureIcon3 from "/public/images/feature-icon-6.png";
import FeatureCard from "./FeatureCard";

const processData = [
  {
    id: 1,
    featureShape: featureShape,
    featureIcon: featureIcon,
    featureTitle: "Certified Engineers",
    featureDesc: "Eagle ray ray snoek rough person brown trout ropefish lake",
  },
  {
    id: 2,
    featureShape: featureShape,
    featureIcon: featureIcon2,
    featureTitle: "Solar System Design",
    featureDesc: "Eagle ray ray snoek rough person brown trout ropefish lake",
  },
  {
    id: 3,
    featureShape: featureShape,
    featureIcon: featureIcon3,
    featureTitle: "Solar eco-power",
    featureDesc: "Eagle ray ray snoek rough person brown trout ropefish lake",
  },
];

const Feature = () => {
  return (
    <section className="py-[120px] bg-[#f3f4f8]">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[78px] sm:gap-7 md:gap-7 xl:gap-[78px]">
          {processData.map(({ id, featureIcon, featureTitle, featureDesc }) => {
            return (
              <div key={id}>
                <FeatureCard
                  featureIcon={featureIcon}
                  featureTitle={featureTitle}
                  featureDesc={featureDesc}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feature;
