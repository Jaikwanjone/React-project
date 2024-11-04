import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewCommer from "./components/NewCommer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewCommer />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
