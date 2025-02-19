import { CarItem } from "../../../types";
import RowLayout from "../../RowLayout/RowLayout";
import Text from "../../Text/Text";

interface CardDescriptionProps {
  item?: CarItem
}


const CardDescription = ({ item }: CardDescriptionProps) => {
  return (
    <RowLayout>
      <Text item={item?.description} variant="p" />
   
    </RowLayout>
  );
};

export default CardDescription;
