import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <section>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>{user && <Link to="/add-product">Add Product</Link>}</li>
              <li>{user && <Link to="/my-orders">My Orders</Link>}</li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                {user && user.uid ? (
                  <p onClick={logout}>Logout</p>
                ) : (
                  <Link to="/login">Login</Link>
                )}
              </li>
              <li>
                <p className="">{user?.displayName}</p>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Buy&Sell
          </Link>
        </div>
        <div className="navbar-center pr-4 hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>{user && <Link to="/add-product">Add Product</Link>}</li>
            <li>{user && <Link to="/my-orders">My Orders</Link>}</li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              {user && user.uid ? (
                <p onClick={logout}>Logout</p>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
            <li>
              <p className="">{user?.displayName}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
