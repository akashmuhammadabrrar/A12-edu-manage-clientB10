import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import { authContext } from "../../../Providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";
import useMakeTeacher from "../../../hooks/useMakeTeacher";
import { CgProfile } from "react-icons/cg";
import { IoHome } from "react-icons/io5";
import { MdAddToPhotos, MdClass } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { FaBorderAll } from "react-icons/fa";
import { ThemeContext } from "../../../Providers/ThemeProvider/ThemeProvider";
import { FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const { user, logOut, loading } = useContext(authContext);
  const [isTeacher] = useMakeTeacher();
  const [isAdmin, isAdminLoading] = useAdmin();
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (loading || isAdminLoading) {
    return (
      <div className="flex justify-center items-center font-bold">
        Loading...
      </div>
    );
  }

  const handleLogout = () => {
    logOut()
      .then(() => {
        // console.log("User Logout successful");
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };

  const navLinks = (
    <>
      <li className="text-xl">
        <Link to="/">Home</Link>
      </li>
      {/* <li>
            <Link to="/dashboard">Dashboard</Link>
          </li> */}
      <li className="text-xl">
        <Link to="/allClasses">All Classes</Link>
      </li>
      <li className="text-xl">
        <Link to="/teacherReq">Teach On Ed Manage Classroom</Link>
      </li>
      <ul className="flex flex-col lg:flex-row lg:justify-center lg:items-center">
        {/* Sidebar content here */}
        {/* Admin Dashboard */}
        {isAdmin ? (
          <>
            <li>
              <NavLink to="/dashboard/teachersRequests">
                <FaCodePullRequest className="text-xl" />
                Teacher's Requests
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/allClassReq">
                <FaBorderAll className="text-xl" />
                All Classes Req
              </NavLink>
            </li>
          </>
        ) : (
          <>
            {isTeacher ? (
              <>
                <li>
                  <NavLink to="/dashboard/addClass">
                    {" "}
                    <MdAddToPhotos className="text-xl" />
                    Add Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myAddedClass">
                    {" "}
                    <MdAddToPhotos className="text-xl" />
                    My Added Class
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {/* student dashboard */}

                {user ? (
                  <>
                    <li>
                      <NavLink to="/dashboard/myEnroll">
                        <MdClass className="text-xl" />
                        My Enrollment Class
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/studentProf">
                        <CgProfile className="text-xl" /> Profile
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
          </>
        )}
        <div className="divider"></div>

        {/* teacher's dashboard */}
      </ul>
    </>
  );

  return (
    <div className="navbar bg-black bg-opacity-40 fixed z-10 top-0 lg:text-white font-bold">
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
        <Link
          to="/"
          className="btn btn-ghost text-2xl text-white font-bold ml-6">
          <span className="text-green-400  font-bold">ED</span>
          <img className="w-8" src={logo} alt="" />
          <span className="text-blue-600">Manage</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white font-bold">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="mr-6">
          <button
            onClick={toggleTheme}
            className=" p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white transition">
            {theme === "dark" ? <FiSun size={24} /> : <FiMoon size={24} />}
          </button>
        </ul>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar mr-6">
            <div className="w-16 rounded-full">
              {user && user?.email ? (
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
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black bg-opacity-30 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <div>
              <p className="bg-black p-2 rounded-lg">
                Name: {user?.displayName}
              </p>
            </div>
            <li>
              <Link>
                <button className="btn btn-ghost">Profile</button>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/userHome">
                <button className="btn btn-ghost">Dashboard</button>
              </Link>
            </li>
            {user ? (
              <>
                <button onClick={handleLogout} className="btn btn-error">
                  Logout
                </button>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <button className="btn btn-ghost">Login</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
