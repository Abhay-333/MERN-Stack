import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const cartMap = new Map(cart.map((item) => [item.id, item]));     

  const mergedProducts = products.map((product) => {
    const cartItem = cartMap.get(product.id);
    return cartItem ? { ...product, quantity: cartItem.quantity } : product;
  });

  const handleAdd = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemove = (id) => {
    const updatedProducts = products.filter((item) => item.id !== id);
    setProducts(updatedProducts);
  };

  const handleDecrement = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        if (existing.quantity === 1) {
          return prev.filter((item) => item.id !== product.id);
        }

        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }

    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        mergedProducts,
        products,
        setProducts,
        handleAdd,
        handleRemove,
        handleDecrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
