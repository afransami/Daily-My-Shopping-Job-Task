import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    setIsAuthenticated(false);
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have successfully log out!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  };

  const NavMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      {user ? (
        <>
          <li>
            <Link to="/content">Content</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <span>
            <img className="border-4 btn-circle " src={user?.photoURL} />
          </span>
          <span className="flex justify-center items-center mx-4 ">
            {user?.displayName}
          </span>
          <span className="flex justify-center items-center">
            <button
              onClick={handleLogOut}
              className="btn btn-outline btn-warning border-0 border-b-4   rounded shadow-xl bg-opacity-30 hover:scale-110"
            >
              Log out
            </button>{" "}
          </span>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 rounded shadow-xl text-white bg-black  flex justify-between h-16 px-5">
      <div className="">
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
            className="menu menu-compact dropdown-content mt-3 p-2  shadow-xl rounded-box w-52 items-center justify-between flex"
          >
            {NavMenu}
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex items-center justify-between">
        <ul className="menu menu-horizontal px-1">{NavMenu}</ul>
      </div>
    </div>
  );
};

export default Navbar;
