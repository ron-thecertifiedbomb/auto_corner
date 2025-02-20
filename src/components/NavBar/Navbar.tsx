import { CarItem } from "../../types";
import RowLayout from "../RowLayout/RowLayout";
import SearchBar from "../Search/SearchBar";

import Title from "./Layout/TitleSection";
type NavbarType = {
    // eslint-disable-next-line no-unused-vars
  setIsOpen: (isOpen: boolean) => void;
    // eslint-disable-next-line no-unused-vars
  openCarDetails?: (item: CarItem) => void;
 
};

const Navbar = ({ setIsOpen, openCarDetails }: NavbarType) => {
  return (
 <RowLayout className="max-w-[1640px] mx-auto flex flex-col md:flex-row justify-between p-2">
  <Title />
  <SearchBar  setIsOpen={setIsOpen} openCarDetails={openCarDetails}  />
</RowLayout>
  );
};

export default Navbar;
