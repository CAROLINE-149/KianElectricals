import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Services from "../components/Services";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import CTA from "../components/CTA";

function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <About />
      <Services />
      <WhyChooseUs />
      <CTA />
    </>
  );
}

export default Home;