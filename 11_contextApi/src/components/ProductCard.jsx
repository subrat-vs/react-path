import React, { useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ product }) => {
  let { setCart } = useContext(MyStore)

  return (
    <article className="min-h-100 group bg-white/80 rounded shadow-md overflow-hidden w-full max-w-sm my-4">
      {/* Image */}
      <div className="h-60 bg-olive-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="h-70 px-6 py-4 border-b border-olive-600">
        <p className="text-xs uppercase tracking-widest text-olive-600 mb-2">
          {product.category}
        </p>

        <h2 className="text-xl font-mono text-olive-900 line-clamp-2">
          {product.title}
        </h2>

        <div className="w-10 h-0.5 bg-olive-600 my-4" />

        <p className="text-sm leading-6 text-olive-800/80 line-clamp-3">
          {product.description}
        </p>

        {/* Price + Rating */}
        <div className="flex items-center justify-between mt-5">
          <span className="text-2xl font-mono text-olive-900">
            ${product.price}
          </span>

          <div className="text-sm text-olive-800">
            ★ {product.rating.rate}
            <span className="text-olive-600/70 ml-1">
              ({product.rating.count})
            </span>
          </div>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="px-6 py-4">
        <button
          onClick={() => setCart((prev) => [...prev, product])}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 uppercase tracking-wider text-xs border border-olive-900 text-olive-900 rounded cursor-pointer hover:bg-olive-900 hover:text-white active:scale-95 transition-all duration-200"
        >
          <ShoppingCart size={15} />
          <span>Add to Cart</span>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
