import { useCart } from "../hooks/CartHook";
import { BsFillTrashFill, BsPlus, BsDash, BsTag } from "react-icons/bs";

type ModalType = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const CartModal = ({ isOpen, setIsOpen }: ModalType) => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getTotalPrice,
    removeFromCart,
    handleCheckout,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-opacity-40 backdrop-blur-md flex justify-center items-center z-50"
      onClick={() => setIsOpen(false)} // Close when clicking outside
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg w-100 relative flex flex-col"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className="text-xl font-bold mb-4 text-orange-500">Cart Details</h2>

        {/* Cart Items */}
        {cart.length > 0 ? (
          <ul className="space-y-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-8 h-8 rounded"
                  />
                  <div>
                    <p className="font-medium text-sm flex items-center">
                      {item.name}
                    </p>
                    <p className="text-orange-500 text-sm flex items-center">
                      PHP {item.price}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="bg-gray-300 p-1 rounded"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    <BsDash size={16} />
                  </button>
                  <p className="text-sm font-semibold">{item.quantity}</p>
                  <button
                    className="bg-gray-300 p-1 rounded"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    <BsPlus size={16} />
                  </button>
                  <button
                    className="bg-orange-500 text-white p-1 rounded"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <BsFillTrashFill size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm text-center">
            Your cart is empty.
          </p>
        )}

        {/* Total Price */}
        <div className="flex justify-between font-bold text-lg mt-4 text-orange-600">
          <span>Total:</span>
          <span>PHP {getTotalPrice()}</span>
        </div>

        {/* Checkout Button */}
        <button
          className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-lg w-full hover:bg-orange-600 transition"
          onClick={handleCheckout}
        >
          Checkout
        </button>

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

export default CartModal;
