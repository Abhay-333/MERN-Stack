import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext.jsx";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { loggedUser } = useContext(AuthContext);
  const userEmail = loggedUser?.email;
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setIsOpen((prev) => !prev);
  };

  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    if (!userEmail) {
      setCartItems([]);
      return;
    }

    const savedCart = localStorage.getItem(`${userEmail}_cartItems`);
    setCartItems(savedCart ? JSON.parse(savedCart) : []);
  }, [userEmail]);

  useEffect(() => {
    if (userEmail) {
      localStorage.setItem(`${userEmail}_cartItems`, JSON.stringify(cartItems));
    }
  }, [cartItems, userEmail]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });

    setIsOpen(true);
    toast.success("Added to cart");
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.info("Removed from cart");
  };

  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + amount);
          return { ...item, quantity: newQty };
        }

        return item;
      }),
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info("Cart cleared");
  };

  const cartTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const cartItemsCount = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );
  const cartIds = new Set(cartItems.map((item) => item.id));

  return (
    <CartContext.Provider
      value={{
        cartIds,
        cartItems,
        cartItemsCount,
        isOpen,
        toggleCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal: Math.round(cartTotal),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
