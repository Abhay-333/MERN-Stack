import { NavLink } from "react-router";
// import { useContext, useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { toast } from "react-toastify";

const Navbar = () => {
  // const { setLoggedInUser } = useContext(AuthContext);
  // const [toggle, setToggle] = useState("register");

  return (
    <nav className="fixed top-0 left-0 flex h-screen w-64 flex-col justify-between bg-gray-900 p-6 text-white">
      <div>
        <h1 className="mb-10 cursor-pointer text-2xl font-bold text-red-500">
          Logo
        </h1>

        <div className="flex flex-col gap-6 font-medium text-gray-300">
          <NavLink to={"/"} className="transition hover:text-red-500">
            Home
          </NavLink>

          <NavLink
            to={"/about"}
            className="transition hover:text-red-500"
          >
            About
          </NavLink>

          <NavLink to={"/contact"} className="transition hover:text-red-500">
            Contact
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <NavLink
          // to={`/${toggle}`}
          // onClick={() =>
          //   setToggle((prev) => (prev === "register" ? "login" : "register"))
          // }
          className="rounded-lg border border-blue-500 px-4 py-2 text-center transition hover:bg-blue-500"
        >
          {/* {toggle === "register" ? "Sign In" : "Login"} */}
          Login
        </NavLink>

        <button
          // onClick={() => {
          //   setLoggedInUser(null);
          //   toast.info("User Logged out");
          // }}
          className="rounded-lg bg-blue-500 px-4 py-2 transition hover:bg-blue-600"
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
