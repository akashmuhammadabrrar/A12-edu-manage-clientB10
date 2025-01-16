import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.png";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {/* <li>
            <Link to="/dashboard">Dashboard</Link>
          </li> */}
      <li>
        <Link to="/allClasses">All Classes</Link>
      </li>
      <li>
        <Link to="/">Teach On Ap Classroom</Link>
      </li>
      {/* {user && isAdmin && (
            <li>
              <Link to="/secret">Secret</Link>
            </li>
          )}
          {user && !isAdmin && (
            <li>
              <Link to="dashboard/userHome">User Home</Link>
            </li>
          )} */}
      {/* <li>
            <Link to="/dashboard/cart">
              <p className="text-green-600 text-3xl">
                <FaCartPlus />
              </p>
              <div className="badge badge-secondary">+{cart.length}</div>
            </Link>
          </li> */}
      {/* <li>
            {user ? (
              <button onClick={handleLogout} className="btn btn-warning">
                Logout
              </button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li> */}
    </>
  );

  return (
    <div className="navbar max-w-screen-2xl mx-auto  bg-black bg-opacity-40 fixed z-10 top-0 text-white font-bold">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 font-bold text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="text-xl font-bold menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white font-bold">
          ED
          <img className="w-8" src={logo} alt="" />
          Manage
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-bold">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar">
            <div className="w-16 rounded-full">
              {/* {user && user?.email ? (
                <div>
                  <img
                    src={user?.photoURL}
                    referrerPolicy="no-referrer"
                    title={user?.displayName}
                    alt=""
                  />
                  <p className="w-10 rounded-full">{user?.displayName}</p>
                </div>
              ) : (
            )} */}
              <img
                alt="Tailwind CSS Navbar component"
                src="https://i.pinimg.com/736x/d9/39/f4/d939f4cebfa4ba7814090cab14b2dd40.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black bg-opacity-30 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">Profile</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
