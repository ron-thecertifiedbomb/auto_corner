import { RiShoppingCart2Fill } from "react-icons/ri";
import { useCart } from "../hooks/CartHook";
import CartModal from "./CartModal";
import { useState } from "react";

const FloatingCart = () => {
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="fixed bottom-2 right-2 lg:bottom-10 lg:right-10 z-20 md:flex flex-col gap-2"
      >
        <div
          className="bg-white w-16 h-[70px] rounded-lg flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative"
          style={{
            boxShadow: "0px 0px 54px -13px rgba(0,0,0,0.7)",
          }}
        >
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />
            <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
          </div>
          {/* <p className="text-xs font-semibold font-titleFont">Cart</p> */}
          <p className="absolute top-1 right-2 bg-orange-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
            {totalItems}
          </p>
        </div>
      </div>
      <CartModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default FloatingCart;
