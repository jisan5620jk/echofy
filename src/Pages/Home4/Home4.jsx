import About from "../../Componant4/About/About";
import Appointment from "../../Componant4/Appointment/Appointment";
import Banner from "../../Componant4/Banner/Banner";
import Benefits from "../../Componant4/Benefits/Benefits";
import Blog from "../../Componant4/Blog/Blog";
import Feature from "../../Componant4/Feature/Feature";
import Pricing from "../../Componant4/Pricing/Pricing";
import Service from "../../Componant4/Service/Service";
import TeamMember from "../../Componant4/TeamMember/TeamMember";
import Testimonial from "../../Componant4/Testimonial/Testimonial";
import WhyChoose from "../../Componant4/WhyChoose/WhyChoose";

const Home4 = () => {
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

export default Home4;
