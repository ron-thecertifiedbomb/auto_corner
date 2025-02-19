import RowLayout from "../RowLayout/RowLayout";
import SearchBar from "../Search/SearchBar";

import Title from "./Layout/TitleSection";

const Navbar = () => {
  return (
 <RowLayout className="max-w-[1640px] mx-auto flex flex-col md:flex-row justify-between p-2">
  <Title />
  <SearchBar />
</RowLayout>
  );
};

export default Navbar;
