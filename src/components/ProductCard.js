import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Button from "./Button";
import RatingStars from "./RatingStars";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="rounded-xl border border-slate-100 bg-white p-4 shadow-md transition hover:-translate-y-1 hover:shadow-card">
      <Link to={`/products/${product.id}`}>
        <img
          alt={product.title}
          className="h-44 w-full rounded-xl object-cover"
          src={product.images[0]}
        />
      </Link>
      <div className="mt-4 space-y-2">
        <Link
          className="line-clamp-2 text-sm font-semibold text-slate-800 hover:text-primary-600"
          to={`/products/${product.id}`}
        >
          {product.title}
        </Link>
        <RatingStars rating={product.rating} />
        <div className="flex items-center justify-between">
          <p className="text-base font-bold text-slate-900">${product.price}</p>
          <Button
            className="px-3 py-1.5 text-xs"
            onClick={() => addToCart(product)}
            variant="primary"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
