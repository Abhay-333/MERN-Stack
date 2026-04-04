import {NavLink} from "react-router";
import Cart from "./screens/Cart";
import Home from "./screens/Home";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-4 bg-gray-900 shadow-lg">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-red-500 cursor-pointer">Logo</h1>

      {/* Links */}
      <div className="flex gap-8 text-gray-300 font-medium">
        <NavLink to={"/"} element={<Home/>} className="cursor-pointer hover:text-red-500 transition">Home</NavLink>
        <NavLink to={"/cart"} element={<Cart/>} className="cursor-pointer hover:text-red-500 transition">Cart</NavLink>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-2 cursor-pointer border border-blue-500 text-white rounded-lg hover:bg-blue-500 hover:text-white transition">
          Sign In
        </button>
        <button className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Add to Cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
