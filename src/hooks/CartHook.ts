import { useAtom } from "jotai";
import { cartAtom } from "../store/atom";
import { Product } from "../types/";

// Hook for cart actions
export const useCart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  // Add or update item quantity
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Function to increase quantity
  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease quantity
  const decreaseQuantity = (id: number) => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0) // Remove items with 0 quantity
    );
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Get total price
  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + Number(item.price) * item.quantity, 0)
      .toFixed(2);
  };

  // Calculate total items in cart
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    clearCart(); // Clear cart after successful checkout
  };

  return {
    cart,
    totalItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalPrice,
    increaseQuantity,
    decreaseQuantity,
    handleCheckout,
  };
};
