import React, { useContext } from "react";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { MyStore } from "../context/MyContext";

const Cart = ({ increaseQuantity, decreaseQuantity, removeFromCart }) => {
  4;
  let { setCart, cart } = useContext(MyStore);

  const totalItems = cart.reduce(
    (total, item) => total + (item.quantity || 0),
    0,
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <section className="min-h-screen bg-olive-50 flex items-center justify-center px-6">
        <div className="text-center">
          <ShoppingBag
            size={48}
            strokeWidth={1.5}
            className="mx-auto text-olive-700 mb-4"
          />

          <h1 className="text-2xl font-mono text-olive-900">
            Your cart is empty
          </h1>

          <p className="text-sm text-olive-800/70 mt-2">
            Add some products to see them here.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-olive-50 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-olive-600">
            Shopping Cart
          </p>

          <h1 className="text-3xl font-mono text-olive-900 mt-2">Your Cart</h1>

          <p className="text-sm text-olive-800/70 mt-1">
            {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          {/* Products */}
          <div className="space-y-4">
            {cart.map((product, id) => (
              <article
                key={id}
                className="bg-white/80 rounded shadow-md p-4 flex flex-col sm:flex-row gap-5"
              >
                {/* Image */}
                <div className="w-full sm:w-32 h-32 bg-olive-100 rounded overflow-hidden shrink-0">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-3"
                  />
                </div>

                {/* Product information */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-olive-600">
                      {product.category}
                    </p>

                    <h2 className="text-lg font-mono text-olive-900 line-clamp-2 mt-1">
                      {product.title}
                    </h2>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 mt-5">
                    {/* Quantity */}
                    <div className="flex items-center border border-olive-300 rounded">
                      <button
                        onClick={() => decreaseQuantity(product.id)}
                        className="p-2 cursor-pointer hover:bg-olive-100 active:scale-90 transition"
                      >
                        <Minus size={14} />
                      </button>

                      <span className="w-8 text-center text-sm">
                        {product.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(product.id)}
                        className="p-2 cursor-pointer hover:bg-olive-100 active:scale-90 transition"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    {/* Price */}
                    <p className="text-lg font-mono text-olive-900">
                      ${(product.price * product.quantity).toFixed(2)}
                    </p>

                    {/* Remove */}
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="flex items-center gap-1 text-xs uppercase tracking-wider text-olive-700 hover:text-red-600 cursor-pointer transition"
                    >
                      <Trash2 size={14} />
                      Remove
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Summary */}
          <aside className="bg-white/80 rounded shadow-md p-6 h-fit">
            <p className="text-xs uppercase tracking-widest text-olive-600">
              Order Summary
            </p>

            <h2 className="text-2xl font-mono text-olive-900 mt-2 mb-6">
              Summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-olive-800">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between text-olive-800">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-olive-800">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>

            <div className="w-full h-px bg-olive-200 my-5" />

            <div className="flex justify-between items-center">
              <span className="text-sm uppercase tracking-wider text-olive-800">
                Total
              </span>

              <span className="text-2xl font-mono text-olive-900">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button className="w-full mt-6 py-3 bg-olive-900 text-white rounded text-xs uppercase tracking-widest cursor-pointer hover:bg-olive-800 active:scale-[0.98] transition">
              Checkout
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Cart;
