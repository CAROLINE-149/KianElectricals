import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <TopBar />

      <div className="relative">
        <Navbar />
        <Hero />
      </div>
    </>
  );
}

export default App;