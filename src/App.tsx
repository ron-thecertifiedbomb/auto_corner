import Navbar from "./components/Navbar";
import FloatingCart from "./components/FloatingCart";
import Carousel from "./components/Carousel/Carousel";
import List from "./components/List/List";
import SectionTitle from "./components/SectionTitle/SectionTite";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <SectionTitle title="Auto Corner" variant="h1" align="center" margin="mt-5" />
      <List />
      <FloatingCart/>
    </>
  );
}

export default App;
