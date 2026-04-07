import React, { useContext } from "react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";

const CartDrawer = () => {
  const {
    isOpen,
    closeCart,
    cartItems,
    cartItemsCount,
    cartTotal,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  const handleCheckout = () => {
    toast.success(
      "Dummy order placed successfully. This is just a demo checkout message.",
    );
  };

  return (
    <>
      {isOpen && (
        <button
          onClick={closeCart}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          aria-label="Close cart overlay"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col border-l border-neutral-800 bg-[#111111] text-white shadow-2xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-5">
          <div>
            <p className="text-lg font-semibold">Your Cart</p>
            <p className="text-sm text-neutral-500">{cartItemsCount} items</p>
          </div>
          <button
            onClick={closeCart}
            className="rounded-full border border-neutral-700 p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <div className="mb-4 rounded-full border border-neutral-800 bg-[#1a1a1a] p-4 text-[#ccff00]">
              <ShoppingBag size={28} />
            </div>
            <h2 className="mb-2 text-xl font-semibold">Cart is empty</h2>
            <p className="mb-6 text-sm text-neutral-500">
              Add a few products and they will show up here.
            </p>
            <button
              onClick={closeCart}
              className="rounded-xl bg-[#ccff00] px-5 py-3 font-semibold text-black transition-colors hover:bg-[#b3e600]"
            >
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[1.5rem] border border-neutral-800 bg-[#171717] p-4"
                >
                  <div className="flex gap-4">
                    <div className="h-20 w-20 flex-shrink-0 rounded-2xl bg-white p-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="line-clamp-2 text-sm font-semibold">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs uppercase tracking-wide text-neutral-500">
                            {item.category}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="rounded-full p-2 text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-red-400"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="font-semibold text-[#ccff00]">
                          ${item.price}
                        </span>

                        <div className="flex items-center gap-2 rounded-full border border-neutral-700 bg-[#121212] px-2 py-1">
                          <button
                            onClick={() => {
                              if (item.quantity === 1) {
                                removeFromCart(item.id);
                                return;
                              }

                              updateQuantity(item.id, -1);
                            }}
                            className="rounded-full p-1 text-neutral-300 transition-colors hover:bg-neutral-800"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="min-w-8 text-center text-sm font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="rounded-full p-1 text-neutral-300 transition-colors hover:bg-neutral-800"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-neutral-800 px-6 py-5">
              <div className="mb-4 flex items-center justify-between text-sm text-neutral-400">
                <span>Subtotal</span>
                <span className="text-lg font-semibold text-white">${cartTotal}</span>
              </div>

              <div className="mb-4 flex gap-3">
                <button
                  onClick={clearCart}
                  className="flex-1 rounded-xl border border-neutral-700 px-4 py-3 text-sm font-semibold transition-colors hover:border-red-500 hover:text-red-400"
                >
                  Clear cart
                </button>
                <button
                  onClick={handleCheckout}
                  className="flex-1 rounded-xl bg-[#ccff00] px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#b3e600]"
                >
                  Checkout
                </button>
              </div>

              <p className="text-xs text-neutral-500">
                Shipping and taxes will be calculated at checkout.
              </p>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
