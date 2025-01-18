import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaArrowLeft, FaBorderAll } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdAddToPhotos, MdClass } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  // todo: getAdmin value from the database
  const isAdmin = true;
  const isTeacher = true;

  return (
    <div className="lg:flex lg:gap-4 ">
      {/* side bar */}
      <div className=" lg:w-1/4 bg-gray-500">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-start justify-center p-2">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-info drawer-button lg:hidden">
              <FaArrowLeft /> Open Dashboard
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 gap-4">
              {/* Sidebar content here */}
              {/* Admin Dashboard */}
              {isAdmin ? (
                <>
                  <li>
                    <NavLink to="/dashboard/userHome">
                      <IoHome className="text-xl" /> Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/teachersRequests">
                      <FaCodePullRequest className="text-xl" />
                      Teacher's Requests
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/userHome">
                      <FaBorderAll className="text-xl" />
                      All Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/userHome">
                      <CgProfile className="text-xl" />
                      Profile
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/dashboard/userHome">
                      <IoHome className="text-xl" /> Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/userHome">
                      <FaCodePullRequest className="text-xl" />
                      Teacher's Requests
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/userHome">
                      <FaBorderAll className="text-xl" />
                      All Classes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/userHome">
                      <CgProfile className="text-xl" />
                      Profile
                    </NavLink>
                  </li>
                </>
              )}
              <div className="divider"></div>
              {/* student dashboard */}
              <li>
                <NavLink to="/">
                  {" "}
                  <IoHome className="text-xl" /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/">
                  <MdClass className="text-xl" />
                  My Enrollment Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/">
                  <CgProfile className="text-xl" /> Profile
                </NavLink>
              </li>
              <div className="divider"></div>
              {/* teacher's dashboard */}
              {isTeacher ? (
                <>
                  <li>
                    <NavLink to="/dashboard/">
                      {" "}
                      <IoHome className="text-xl" /> Teacher Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/">
                      {" "}
                      <MdAddToPhotos className="text-xl" />
                      Add Class
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/">
                      <CgProfile className="text-xl" /> Teacher Profile
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/dashboard/">
                      {" "}
                      <IoHome className="text-xl" /> Teacher Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/">
                      {" "}
                      <MdAddToPhotos className="text-xl" />
                      Add Class
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/">
                      <CgProfile className="text-xl" /> Teacher Profile
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      {/* dashboard content */}
      <div className="lg:w-3/4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
