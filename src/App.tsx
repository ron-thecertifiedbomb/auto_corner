import Navbar from "./components/Navbar";
import Food from "./components/Food";
import FloatingCart from "./components/FloatingCart";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Food />
      <FloatingCart/>
    </>
  );
}

export default App;
