import { useCart } from "../hooks/CartHook";
import { BsFillTrashFill, BsPlus, BsDash, BsTag } from "react-icons/bs";
import { Product } from "../types";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

type FoodDetailsModalType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  item: Product;
};
const FoodDetailsModal = ({
  item,
  setIsOpen,
  isOpen,
}: FoodDetailsModalType) => {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(item);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1200); // Reset message after 1.2 seconds
  };

  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 bg-opacity-90 backdrop-blur-md flex justify-center items-center z-50"
      onClick={() => setIsOpen(false)} // Close when clicking outside
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-96 relative flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className="text-xl font-bold mb-4 text-orange-500">Food Details</h2>

        {/* Food Image */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover rounded"
        />

        {/* Food Information */}
        <div className="mt-4">
          <p className="text-lg font-semibold">{item.name}</p>
          <p className="text-orange-500 text-sm mt-1">
            <BsTag className="mr-1 inline" /> PHP {item.price}
          </p>
          <p className="text-gray-600 text-sm mt-2">{item.description}</p>
        </div>

        {/* Add to Cart Button */}
        <button
          className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg w-full hover:bg-orange-600 transition flex items-center justify-center gap-2"
          onClick={handleAddToCart}
        >
          <FaShoppingCart size={18} /> Add to Cart
        </button>

        {addedToCart && (
          <div className="absolute top-4 right-4 bg-green-500 text-white py-1 px-3 rounded-lg shadow-lg text-sm transition-opacity duration-300">
            Added to cart!
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="mt-2 bg-gray-300 text-black py-2 px-4 rounded-lg w-full hover:bg-gray-400 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default FoodDetailsModal;
