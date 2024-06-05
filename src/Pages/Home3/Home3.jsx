import About from "../../Componant3/About/About";
import Appointment from "../../Componant3/Appointment/Appointment";
import Banner from "../../Componant3/Banner/Banner";
import Benefits from "../../Componant3/Benefits/Benefits";
import Blog from "../../Componant3/Blog/Blog";
import Feature from "../../Componant3/Feature/Feature";
import Pricing from "../../Componant3/Pricing/Pricing";
import Service from "../../Componant3/Service/Service";
import TeamMember from "../../Componant3/TeamMember/TeamMember";
import Testimonial from "../../Componant3/Testimonial/Testimonial";
import WhyChoose from "../../Componant3/WhyChoose/WhyChoose";

const Home3 = () => {
  return (
    <>
      <Banner />
      <Feature />
      <About />
      <Service />
      <WhyChoose />
      <Pricing />
      <TeamMember />
      <Benefits/>
      <Testimonial />
      <Blog />
      <Appointment />
    </>
  );
};

export default Home3;
