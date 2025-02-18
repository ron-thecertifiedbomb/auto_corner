import { Product } from "../types";

const SearchResults = ({
  products,
  searchQuery,
  onClear,
}: {
  products: Product[];
  searchQuery: string;
  onClear: (item: Product) => void;
}) => {
  return (
    searchQuery && (
      <div
        className={`w-full mx-auto ${
          products.length === 0 ? "lg:h-15" : "lg:h-96"
        } bg-white top-12 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer px-2 rounded-lg`}
      >
        {products.length === 0 ? (
          <div className="text-center text-gray-500 py-4">No results found</div>
        ) : (
          products.map((item) => (
            <div
              onClick={() => onClear(item)}
              key={item.id}
              className="max-w-[600px] bg-gray-100 mb-3 flex items-center gap-3 py-2 px-2"
            >
              <img
                className="w-20 h-20 object-fill flex-shrink-0 rounded-lg"
                src={item.image}
                alt="productImg"
              />
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-lg">{item.name}</p>
                <p className="text-xs">{item.description}</p>
                <p className="text-sm">
                  Price:{" "}
                  <span className="text-primeColor font-semibold">
                    ${item.price}
                  </span>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    )
  );
};

export default SearchResults;