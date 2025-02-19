import { CarItem } from "../../../types";
import RowLayout from "../../RowLayout/RowLayout";
import Text from "../../Text/Text";

interface CardTitleProps {
  item?: CarItem
}


const CardTitle = ({ item }: CardTitleProps) => {
  return (
    <RowLayout className="mt-2">
      <Text item={item?.make} variant="h2" bold />
      <Text item={item?.model} variant="h3" />
    </RowLayout>
  );
};

export default CardTitle;
