import { useEffect } from "react";
import RowLayout from "../RowLayout/RowLayout";
import Text from "../Text/Text";

interface SeeMoreProps {
  seeMore: boolean;
  setSeeMore: (value: boolean) => void;
}

const SeeMore: React.FC<SeeMoreProps> = ({ seeMore, setSeeMore }) => {
    useEffect(() => {
        window.scrollTo({
          top: seeMore ? document.body.scrollHeight : 0, // Scroll to bottom if true, top if false
          behavior: "smooth",
        });
      }, [seeMore]);

  return (
    <RowLayout>
      <div
        className="flex justify-center items-center cursor-pointer w-full py-2"
        onClick={() => setSeeMore(!seeMore)}
      >
        <Text item={seeMore ? "See Less" : "See More"} />
      </div>
    </RowLayout>
  );
};

export default SeeMore;
