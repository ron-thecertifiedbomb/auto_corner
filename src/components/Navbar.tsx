import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 flex-col lg:flex-row">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
        Lizard Interactive <span className="font-bold">Auto Corner</span>
      </h1>
      <SearchBar />
    </div>
  );
};

export default Navbar;
