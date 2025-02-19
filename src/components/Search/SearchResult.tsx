
import { CarItem } from "../../types";

interface SearchResultsProps<T> {
  items: T[];
  searchQuery: string;
  openCarDetails?: (item: T) => void;
  setSearchQuery: (query: string) => void;
  setIsOpen: (isOpen: boolean) => void;
}

const SearchResults = <T extends CarItem>({
  items,
  searchQuery,
  openCarDetails,
  setSearchQuery,
  setIsOpen,
  
  
}: SearchResultsProps<T>) => {

  const handleSelectSearch = (item: T) => {
    if (openCarDetails) {
      openCarDetails(item);
      setIsOpen(true)
    }
    setSearchQuery("");
  };

  if (!searchQuery) return null;

  return (
    <div
      className={`w-full mx-auto ${
        items.length === 0 ? "lg:h-15" : "lg:h-96"
      } bg-white top-12 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer px-2 rounded-lg`}
    >
      {items.length === 0 ? (
        <div className="text-center text-gray-500 py-4">
          No results found
        </div>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            className="max-w-[600px] bg-gray-100 mb-3 flex items-center gap-3 py-2 px-2"
            role="button"
            onClick={() => handleSelectSearch(item)}
          >
            <img
              className="w-20 h-20 object-fill flex-shrink-0 rounded-lg"
              src={item.image}
              alt="productImg"
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-lg">{item.model}</p>
              <p className="text-xs">{item.description}</p>
              <p className="text-sm">
                Price:{" "}
                <span className="text-primeColor font-semibold">
                  ${item.price.toLocaleString()}
                </span>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SearchResults;
