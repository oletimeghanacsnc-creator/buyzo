import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/products";

function CategoriesPage() {
  const [searchParams] = useSearchParams();
  const selectedCategoryParam = searchParams.get("category");
  const normalizedSelectedCategory = selectedCategoryParam
    ? selectedCategoryParam.toLowerCase()
    : "";

  const selectedCategory = categories.find(
    (category) => category.label.toLowerCase() === normalizedSelectedCategory
  )?.label;

  const categoryProductCount = categories.reduce((counts, category) => {
    counts[category.label] = products.filter(
      (product) => product.category.toLowerCase() === category.label.toLowerCase()
    ).length;
    return counts;
  }, {});

  const selectedCategoryProducts = selectedCategory
    ? products.filter(
        (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
      )
    : [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Categories</h1>
        <p className="mt-1 text-sm text-slate-500">
          Browse by category first, then jump into filtered shopping.
        </p>
      </div>

      <section className="mb-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <Link
            className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-md transition hover:-translate-y-0.5 hover:shadow-card"
            key={category.id}
            to={`/shop?category=${encodeURIComponent(category.label)}`}
          >
            <img
              alt={category.label}
              className="h-40 w-full object-cover"
              src={category.image}
            />
            <div className="space-y-2 p-4">
              <h2 className="text-lg font-semibold text-slate-900">
                {category.label}
              </h2>
              <p className="text-sm text-slate-500">
                {categoryProductCount[category.label]} products
              </p>
              <p className="pt-1 text-sm font-semibold text-primary-600">
                Shop Category
              </p>
            </div>
          </Link>
        ))}
      </section>

      {selectedCategory ? (
        <section>
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-slate-900">
              {selectedCategory} Preview
            </h2>
            <Link
              className="text-sm font-semibold text-primary-600"
              to={`/shop?category=${encodeURIComponent(selectedCategory)}`}
            >
              View All in Shop
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {selectedCategoryProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ) : null}

      {!selectedCategoryParam ? (
        <p className="text-sm text-slate-500">
          Tip: open a category to view filtered products in Shop.
        </p>
      ) : null}
    </div>
  );
}

export default CategoriesPage;
