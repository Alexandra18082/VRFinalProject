import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="h-[60px] flex items-center justify-between px-4 md:px-8 bg-blue-100 text-black shadow-md"
    >
      {/* Logo */}
      <h2 className="text-lg md:text-xl">
        <Link to="/" className="hover:text-blue-500 transition font-bold">
          VOIDSHIFT
        </Link>
      </h2>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <Link to="/cart" className="hover:text-blue-500 transition font-bold">
            CART
          </Link>
        </li>
        <li>
          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>
        </li>

        <li>
          <Link to="/wish-list" className="hover:text-blue-500 transition">
            Wish List
          </Link>
        </li>

        <li>
          <Link to="/faq" className="hover:text-blue-500 transition">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-500 transition">
            About Us
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button*/}
      <button className="md:hidden text-xl hover:text-blue-500 transition">
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
