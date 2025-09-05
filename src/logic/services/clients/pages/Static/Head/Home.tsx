import Footer from "../../Footer/Footer";
import Contacts from "../Contacts/Contacts";
import Footer_head from "../Footer_head/Footer_head";
import HeroSection from "../HeroSection/HeroSection";
import Main from "../Main/Main";
import Section_foot from "../Section_foot/Section_foot";
import Section_footer from "../Section_footer/Section_footer";
import Section_head from "../Section_head/Section_head";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <br />
      <Section_head />
      <br />
      <br />
      <br />
      <Main />
      <br />
      <br />
      <Section_foot />
      <br />
      <Section_footer />
      <br />
      <br />
      <br />
      <Footer_head />
      <br />
      <br />
      <Contacts />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
