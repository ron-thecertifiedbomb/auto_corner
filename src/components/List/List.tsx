import React from "react";

interface ListProps<T> {
  items: T[];
  // openCarDetails is optional
  openCarDetails?: (item: T) => void;
  // ItemComponent is a component that accepts a single item of type T and optionally openCarDetails
  ItemComponent: React.ComponentType<{ item: T; openCarDetails?: (item: T) => void }>;
}

const List = <T,>({ items, openCarDetails, ItemComponent }: ListProps<T>) => {
  return (
    <div className="max-w-[1640px] mx-auto w-full h-120 pt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <ItemComponent
            key={index}
            item={item}
            openCarDetails={openCarDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default List;
