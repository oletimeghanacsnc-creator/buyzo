import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Categories", path: "/categories" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSearchTerm(params.get("q") || "");
  }, [location.search]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const trimmedSearch = searchTerm.trim();
    if (!trimmedSearch) {
      navigate("/shop");
      return;
    }
    navigate(`/shop?q=${encodeURIComponent(trimmedSearch)}`);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link className="text-lg font-extrabold tracking-tight text-slate-900" to="/">
          Buyzo
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? "text-primary-600" : "text-slate-600 hover:text-slate-900"
                }`
              }
              key={item.path}
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <form className="flex items-center gap-2" onSubmit={handleSearchSubmit}>
            <div className="relative">
              <input
                className="w-44 rounded-lg border border-slate-200 py-2 pl-9 pr-3 text-sm text-slate-700 focus:border-primary-500 focus:outline-none"
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search product"
                type="text"
                value={searchTerm}
              />
              <svg
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-4.3-4.3M10.8 18a7.2 7.2 0 100-14.4 7.2 7.2 0 000 14.4z" />
              </svg>
            </div>
            <button
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              type="submit"
            >
              Search
            </button>
          </form>
          <Link
            aria-label="Cart"
            className="relative rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
            to="/cart"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <path d="M3 4h2l2.4 11.2a2 2 0 002 1.6h8.9a2 2 0 001.9-1.4L22 7H7" />
              <circle cx="10" cy="20" r="1.2" />
              <circle cx="18" cy="20" r="1.2" />
            </svg>
            {cartCount > 0 ? (
              <span className="absolute -right-1 -top-1 min-h-5 min-w-5 rounded-full bg-primary-600 px-1 text-center text-xs font-bold leading-5 text-white">
                {cartCount}
              </span>
            ) : null}
          </Link>
          <Link
            aria-label="Profile/Login"
            className="rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
            to="/account"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20a8 8 0 0116 0" />
            </svg>
          </Link>
        </div>

        <button
          className="rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          type="button"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>

      {menuOpen ? (
        <div className="space-y-3 border-t border-slate-100 px-4 py-4 md:hidden">
          <form
            className="flex items-center gap-2"
            onSubmit={(event) => {
              handleSearchSubmit(event);
              setMenuOpen(false);
            }}
          >
            <input
              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700 focus:border-primary-500 focus:outline-none"
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search product"
              type="text"
              value={searchTerm}
            />
            <button
              className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700"
              type="submit"
            >
              Go
            </button>
          </form>
          {menuItems.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `block rounded-lg px-2 py-1.5 text-sm font-medium ${
                  isActive ? "bg-primary-50 text-primary-600" : "text-slate-700"
                }`
              }
              key={item.path}
              onClick={() => setMenuOpen(false)}
              to={item.path}
            >
              {item.label}
            </NavLink>
          ))}
          <div className="flex items-center gap-2">
            <Link className="text-sm font-medium text-slate-700" to="/cart">
              Cart ({cartCount})
            </Link>
            <span className="text-slate-300">|</span>
            <Link className="text-sm font-medium text-slate-700" to="/account">
              Login/Profile
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
