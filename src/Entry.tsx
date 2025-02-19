import Card from "./components/Card/Card";
import CarModal from "./components/CarModal/CarModal";
import Carousel from "./components/Carousel/Carousel";
import FilterControls from "./components/FilterControls/FilterControls";
import List from "./components/List/List";
import Navbar from "./components/NavBar/Navbar";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import useCarHook from "./hooks/CarSelectionHook";
import { data } from "./utils/cars";
import UnorderedCarList from "./components/List/CarFeatureList";
const Entry = () => {
  const {
    filterType,
    cars,
    getButtonClass,
    handleSortPrice,
    isOpen,
    openCarDetails,
    selectedItem,
    setIsOpen,
  } = useCarHook();

  return (
    <>
      <Navbar />
      <Carousel />
      <SectionTitle
        title="Auto Section"
        variant="h1"
        align="center"
        margin="mt-5"
      />

      <FilterControls
        filterType={filterType}
        getButtonClass={getButtonClass}
        handleSortPrice={handleSortPrice}
      />
         <List items={cars} openCarDetails={openCarDetails} ItemComponent={Card} />
    
      <CarModal item={selectedItem} isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
};

export default Entry;
