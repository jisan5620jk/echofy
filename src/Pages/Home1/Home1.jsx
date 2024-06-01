import About from "../../Componant1/About/About";
import Banner from "../../Componant1/Banner/Banner";
import Counter from "../../Componant1/Counter/Counter";
import Project from "../../Componant1/Project/Project";
import Service from "../../Componant1/Service/Service";
import Skill from "../../Componant1/Skill/Skill";
import Process from "../../Componant1/Process/Process";
import Testimonial from "../../Componant1/Testimonial/Testimonial";
import Brand from "../../Componant1/Brand/Brand";
import TeamMember from "../../Componant1/TeamMember/TeamMember";
import Blog from "../../Componant1/Blog/Blog";
import ContentSlider from "../../Componant1/ContentSlider/ContentSlider";

const Home1 = () => {
  return (
    <>
      <Banner />
      <ContentSlider />
      <About />
      <Service />
      <Skill />
      <Counter />
      <Project />
      <Process />
      <Testimonial />
      <Brand />
      <TeamMember />
      <Blog />
    </>
  );
};

export default Home1;
