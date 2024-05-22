import About from "../../Componant1/About/About";
import Banner from "../../Componant1/Banner/Banner";
import ContentSlider from "../../Componant1/ContentSlider/ContentSlider";
import MarqueeSlide from "../../Componant1/ContentSlider/ContentSlider";
import Service from "../../Componant1/Service/Service";
import Skill from "../../Componant1/Skill/Skill";

const Home1 = () => {
  return (
    <>
      <Banner />
      <ContentSlider />
      <MarqueeSlide />
      <About />
      <Service />
      <Skill />
    </>
  );
};

export default Home1;
