import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmation from './pages/OrderConfirmation';
import UserAccount from './pages/UserAccount';
import OrderHistory from './pages/OrderHistory';
import WishlistPage from './pages/WishlistPage';
import ContactSupport from './pages/ContactSupport';

function App() {
  const [cart, setCart] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const addToCart = product => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = id => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  // simple wrapper component for protecting routes
  function PrivateRoute({ children }) {
    return loggedIn ? children : <LoginPage onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <BrowserRouter>
      {/* hide header/footer on login route */}
      <RouteContainer />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/login" element={<LoginPage onLogin={() => setLoggedIn(true)} />} />
        <Route path="/products" element={<PrivateRoute><ProductListing /></PrivateRoute>} />
        <Route path="/product/:id" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />
        <Route
          path="/cart"
          element={<PrivateRoute><CartPage cart={cart} removeFromCart={removeFromCart} /></PrivateRoute>}
        />
        <Route path="/checkout" element={<PrivateRoute><CheckoutPage /></PrivateRoute>} />
        <Route path="/order-confirmation" element={<PrivateRoute><OrderConfirmation /></PrivateRoute>} />
        <Route path="/account" element={<PrivateRoute><UserAccount /></PrivateRoute>} />
        <Route path="/orders" element={<PrivateRoute><OrderHistory /></PrivateRoute>} />
        <Route path="/wishlist" element={<PrivateRoute><WishlistPage /></PrivateRoute>} />
        <Route path="/contact" element={<PrivateRoute><ContactSupport /></PrivateRoute>} />
      </Routes>

      <FooterWrapper />
    </BrowserRouter>
  );
}

// component to wrap header based on location
function RouteContainer() {
  const location = useLocation();
  if (location.pathname === '/login') {
    return null; // hide header on login
  }
  return <Header />;
}

// footer wrapper to hide on login
function FooterWrapper() {
  const location = useLocation();
  if (location.pathname === '/login') return null;
  return <Footer />;
}


export default App;
