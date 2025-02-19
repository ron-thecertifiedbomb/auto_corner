import { CarItem } from "../../types";
import ImageHolder from "../ImageHolder/ImageHolder"; // Adjust the path as needed
import Text from "../Text/Text";
import CardDescription from "./Layout/CardDesctiption";
import CardTitle from "./Layout/CardTitle";
type CarDetailsModalType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  item: CarItem | undefined;
};

const CarModal = ({ item, setIsOpen, isOpen }: CarDetailsModalType) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-opacity-90 backdrop-blur-md flex flex-col justify-center items-center z-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg h-100 w-130 relative flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <ImageHolder src={item?.image} />
        <CardTitle item={item} />
        <CardDescription item={item} />
      </div>
    </div>
  );
};

export default CarModal;
