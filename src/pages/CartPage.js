export default function CartPage({ cart, removeFromCart }) {
  // reuse existing cart logic or replace previous Cart.js
  if (!cart || cart.length === 0) return <p>Your cart is empty.</p>;

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.title} - ${item.price}{' '}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p><strong>Total: ${total.toFixed(2)}</strong></p>
    </div>
  );
}
