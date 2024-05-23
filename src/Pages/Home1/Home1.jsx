import About from "../../Componant1/About/About";
import Banner from "../../Componant1/Banner/Banner";
import ContentSlider from "../../Componant1/ContentSlider/ContentSlider";
import MarqueeSlide from "../../Componant1/ContentSlider/ContentSlider";
import Counter from "../../Componant1/Counter/Counter";
import Project from "../../Componant1/Project/Project";
import Service from "../../Componant1/Service/Service";
import Skill from "../../Componant1/Skill/Skill";
import Process from "../../Componant1/Process/Process";
import Testimonial from "../../Componant1/Testimonial/Testimonial";

const Home1 = () => {
  return (
    <>
      <Banner />
      <ContentSlider />
      <MarqueeSlide />
      <About />
      <Service />
      <Skill />
      <Counter />
      <Project />
      <Process />
      <Testimonial />
    </>
  );
};

export default Home1;
