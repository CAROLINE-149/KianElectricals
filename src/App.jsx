import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Highlights from "./components/Highlights";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <TopBar />

      <div className="relative">
        <Navbar />
        <Hero />
        <Highlights />
        <Services />
        <About />
        <WhyChooseUs />
        <CTA />
        <Footer />

      </div>
    </>
  );
}

export default App;