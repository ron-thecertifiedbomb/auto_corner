import Carousel from "./components/Carousel/Carousel";
import FilterControls from "./components/FilterControls/FilterControls";
import List from "./components/List/List";
import Navbar from "./components/Navbar";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import useCarHook from "./hooks/CarSelectionHook";

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
        title="Auto Corner"
        variant="h1"
        align="center"
        margin="mt-5"
      />

      <FilterControls
        filterType={filterType}
        getButtonClass={getButtonClass}
        handleSortPrice={handleSortPrice}
      />
      <List item={cars} />
    </>
  );
};

export default Entry;
