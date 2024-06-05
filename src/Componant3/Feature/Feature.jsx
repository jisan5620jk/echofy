/* eslint-disable no-unused-vars */
import featureShape from "/public/images/feature-shape.png";
import featureIcon from "/public/images/feature-icon.png";
import featureIcon2 from "/public/images/feature-icon2.png";
import featureIcon3 from "/public/images/feature-icon3.png";
import FeatureCard from "./FeatureCard";

const processData = [
  {
    id: 1,
    featureShape: featureShape,
    featureIcon: featureIcon3,
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
    featureIcon: featureIcon,
    featureTitle: "Solar eco-power",
    featureDesc: "Eagle ray ray snoek rough person brown trout ropefish lake",
  },
];

const Feature = () => {
  return (
    <section className="relative z-10 -mt-[70px]">
      <div className="Container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {processData.map(({ id,featureShape, featureIcon, featureTitle, featureDesc }) => {
            return (
              <div key={id}>
                <FeatureCard
                  featureShape={featureShape}
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
