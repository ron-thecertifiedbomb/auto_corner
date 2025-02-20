import { CarItem } from "../../types";
import ImageHolder from "../ImageHolder/ImageHolder"; // Adjust the path as needed
import CarFeaturesList from "../List/CarFeatureList";
import CardDescription from "./Layout/CardDesctiption";
import CardTitle from "./Layout/CardTitle";
import Text from "../Text/Text";

type CarDetailsModalType = {
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (isOpen: boolean) => void;
  item?: CarItem;
};

const CarModal = ({ item, setIsOpen, isOpen }: CarDetailsModalType) => {
  

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-opacity-50 backdrop-blur-md flex flex-col justify-center items-center z-50"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg max-w-180 relative flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <ImageHolder src={item?.image} />
        <CardTitle item={item} />
        <CardDescription item={item} />
        <Text
          item={"Technical Specifactions:"}
          variant="p"
          margin="mb-2"
          bold
        />
        <CarFeaturesList item={item} />
      </div>
    </div>
  );
};

export default CarModal;
