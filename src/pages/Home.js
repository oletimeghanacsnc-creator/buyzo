import { useState, useEffect } from 'react';

export default function Home({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  if (products.length === 0) return <p>Loading…</p>;

  return (
    <div className="home-page">
      {/* Hero section -- placeholder carousel */}
      <section className="hero">
        <h2>Welcome to E-Shop</h2>
        <p>Big sale, new arrivals and more!</p>
        <button>Shop Now</button>
      </section>

      {/* Category grid: static icons for now */}
      <section className="categories">
        <h3>Categories</h3>
        <div className="category-grid">
          <div className="category-card">Electronics</div>
          <div className="category-card">Jewelery</div>
          <div className="category-card">Men's clothing</div>
          <div className="category-card">Women's clothing</div>
        </div>
      </section>

      {/* Featured products: reuse fetched list */}
      <section className="featured">
        <h3>Featured Products</h3>
        <div className="product-list">
          {products.slice(0, 6).map(p => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
              <p>${p.price}</p>
              <button onClick={() => addToCart(p)}>Add to cart</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
