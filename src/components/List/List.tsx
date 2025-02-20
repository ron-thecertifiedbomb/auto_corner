import React,{ useState } from "react";
import SeeMore from "../SeeMore/SeeMore";

interface ListProps<T> {
  items: T[];
  // eslint-disable-next-line no-unused-vars
  openCarDetails?: (item: T) => void;
  ItemComponent: React.ComponentType<{
    item: T;
    // eslint-disable-next-line no-unused-vars
    openCarDetails?: (item: T) => void;
  }>;
}

const List = <T,>({ items, openCarDetails, ItemComponent }: ListProps<T>) => {
  
  const [seeMore, setSeeMore] = useState(false);
  const sliceItems = items.slice(0, 5);
  const slicedItems = seeMore ? items : sliceItems;

  return (
    <div className="max-w-[1640px] mx-auto w-full h-120 pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {slicedItems.map((item, index) => (
          <ItemComponent
            key={index}
            item={item}
            openCarDetails={openCarDetails}
          />
        ))}
      </div>
      <SeeMore seeMore={seeMore} setSeeMore={setSeeMore} />
    </div>
  );
};

export default List;
