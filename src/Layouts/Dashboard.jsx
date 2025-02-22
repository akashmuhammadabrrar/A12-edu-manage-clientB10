// import React from "react";
// import { CgProfile } from "react-icons/cg";
// import { FaArrowLeft, FaBorderAll } from "react-icons/fa";
// import { FaCodePullRequest } from "react-icons/fa6";
// import { IoHome } from "react-icons/io5";
// import { MdAddToPhotos, MdClass } from "react-icons/md";
// import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../hooks/useAdmin";
// import useMakeTeacher from "../hooks/useMakeTeacher";

// const Dashboard = () => {
//   // todo: getAdmin value from the database
//   const [isAdmin, isAdminLoading] = useAdmin();
//   // const isTeacher = true;
//   const [isTeacher] = useMakeTeacher();
//   // console.log(isTeacher);
//   // if (isTeacherPending || isAdminLoading) {
//   //   return <div>Dashboard Loading...</div>;
//   // }

//   return (
//     <div className="lg:flex lg:gap-4">
//       {/* side bar */}
//       <div className=" w-full mx-auto lg:w-1/4 bg-gray-500 lg:sticky lg:top-0 h-screen">
//         <div className="drawer lg:drawer-open">
//           <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//           <div className="drawer-content flex flex-col items-start justify-center p-2">
//             {/* Page content here */}
//             <label
//               htmlFor="my-drawer-2"
//               className="btn btn-info drawer-button lg:hidden">
//               <FaArrowLeft /> Open Dashboard
//             </label>
//           </div>
//           <div className="drawer-side">
//             <label
//               htmlFor="my-drawer-2"
//               aria-label="close sidebar"
//               className="drawer-overlay"></label>
//             <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 gap-4">
//               {/* Sidebar content here */}
//               {/* Admin Dashboard */}
//               {isAdmin ? (
//                 <>
//                   <li>
//                     <NavLink to="/">
//                       <IoHome className="text-xl" /> Home
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/dashboard/userHome">
//                       <IoHome className="text-xl" /> Admin Home
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/dashboard/teachersRequests">
//                       <FaCodePullRequest className="text-xl" />
//                       Teacher's Requests
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/dashboard/allClassReq">
//                       <FaBorderAll className="text-xl" />
//                       All Classes Req
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/dashboard/allUsers">
//                       <FaBorderAll className="text-xl" />
//                       All Users
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/dashboard/studentProf">
//                       <CgProfile className="text-xl" />
//                       Profile
//                     </NavLink>
//                   </li>
//                 </>
//               ) : (
//                 <>
//                   {isTeacher ? (
//                     <>
//                       <li>
//                         <NavLink to="/">
//                           {" "}
//                           <IoHome className="text-xl" /> Home
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink to="/dashboard/">
//                           {" "}
//                           <IoHome className="text-xl" /> Teacher Home
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink to="/dashboard/addClass">
//                           {" "}
//                           <MdAddToPhotos className="text-xl" />
//                           Add Class
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink to="/dashboard/myAddedClass">
//                           {" "}
//                           <MdAddToPhotos className="text-xl" />
//                           My Added Class
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink to="/dashboard/studentProf">
//                           <CgProfile className="text-xl" /> Teacher Profile
//                         </NavLink>
//                       </li>
//                     </>
//                   ) : (
//                     <>
//                       {/* student dashboard */}
//                       <li>
//                         <NavLink to="/">
//                           {" "}
//                           <IoHome className="text-xl" /> User Home
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink to="/dashboard/myEnroll">
//                           <MdClass className="text-xl" />
//                           My Enrollment Class
//                         </NavLink>
//                       </li>
//                       <li>
//                         <NavLink to="/dashboard/studentProf">
//                           <CgProfile className="text-xl" /> Profile
//                         </NavLink>
//                       </li>
//                       <div className="divider"></div>
//                     </>
//                   )}
//                 </>
//               )}
//               <div className="divider"></div>

//               {/* teacher's dashboard */}
//             </ul>
//           </div>
//         </div>
//       </div>
//       {/* dashboard content */}
//       <div className="lg:w-3/4">
//         <Outlet></Outlet>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaArrowLeft, FaBars } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { MdAddToPhotos, MdClass } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useMakeTeacher from "../hooks/useMakeTeacher";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isTeacher] = useMakeTeacher();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gray-500 z-50 transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}>
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-white font-bold">Dashboard</h2>
          {/* Close Button */}
        </div>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 gap-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/">
                  <IoHome className="text-xl" /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userHome">
                  <IoHome className="text-xl" /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/teachersRequests">
                  <FaCodePullRequest className="text-xl" /> Teacher's Requests
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allClassReq">
                  <MdAddToPhotos className="text-xl" /> All Classes Req
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <MdAddToPhotos className="text-xl" /> All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/studentProf">
                  <CgProfile className="text-xl" /> Profile
                </NavLink>
              </li>
            </>
          ) : isTeacher ? (
            <>
              <li>
                <NavLink to="/">
                  <IoHome className="text-xl" /> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/">
                  <IoHome className="text-xl" /> Teacher Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addClass">
                  <MdAddToPhotos className="text-xl" /> Add Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myAddedClass">
                  <MdAddToPhotos className="text-xl" /> My Added Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/studentProf">
                  <CgProfile className="text-xl" /> Teacher Profile
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">
                  <IoHome className="text-xl" /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myEnroll">
                  <MdClass className="text-xl" /> My Enrollment Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/studentProf">
                  <CgProfile className="text-xl" /> Profile
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
        </ul>
      </div>

      {/* Toggle Button (Small Screens) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 bg-blue-600 text-white p-2 rounded-lg lg:hidden z-50">
        <FaBars className="text-2xl" />
      </button>

      {/* Main Content */}
      <div className="flex-1 lg:ml-80 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
