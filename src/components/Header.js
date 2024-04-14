import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-purple-800">
      <div className="hover:scale-110 transition-transform">
        <img
          className="h-28 rounded-2xl bg-purple-100"
          src="https://i.ibb.co/FDTKw4Q/gastronome-high-resolution-logo.png"
          alt="gastronome-high-resolution-logo"
        />
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 space-x-4 ">
          <li className="bg-slate-400">
            Online Status: {onlineStatus ? "✅" : "⛔"}
          </li>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="links">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="links">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="links">
              Grocery
            </Link>
          </li>
          <li>
            <Link className="links">Cart</Link>
          </li>
          <button
            className="text-decoration-line: underline"
            onClick={() => {
              //   btnName = 'Logout';
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
