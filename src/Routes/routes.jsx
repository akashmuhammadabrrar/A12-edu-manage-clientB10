import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import TeachReqForm from "../Pages/TeachingRequestForm/TeachReqForm";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Privet from "../Pages/Privet/Privet";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../Layouts/Dashboard";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import TeacherReq from "../Pages/Dashboard/TeacherReq/TeacherReq";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddClassTeach from "../Pages/Dashboard/AddClassTeach/AddClassTeach";
import ClassRequests from "../Pages/Dashboard/ClassRequests/ClassRequests";
import ClassDetails from "../Pages/ClassDetails/ClassDetails";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import MyEnroll from "../Pages/MyEnroll/MyEnroll";
import StudentProf from "../Pages/studentProf/StudentProf";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/teacherReq",
        element: <TeachReqForm></TeachReqForm>,
      },
      {
        path: "/allClasses",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/payment",
        element: <PaymentPage></PaymentPage>,
      },
      {
        path: "/privet",
        element: (
          <PrivetRoute>
            <Privet></Privet>
          </PrivetRoute>
        ),
      },
      {
        path: "/classDetail/:id",
        element: <ClassDetails></ClassDetails>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard/userHome",
        element: <UserHome></UserHome>,
      },
      // admin routes
      {
        path: "/dashboard/allUsers",
        element: (
          <PrivetRoute>
            <AllUsers></AllUsers>
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/teachersRequests",
        element: (
          <PrivetRoute>
            <TeacherReq></TeacherReq>
          </PrivetRoute>
        ),
      },
      {
        path: "/dashboard/allClassReq",
        element: <ClassRequests></ClassRequests>,
      },
      // teacher's routes
      {
        path: "/dashboard/addClass",
        element: <AddClassTeach></AddClassTeach>,
      },

      // ---------------
      {
        path: "/dashboard/myEnroll",
        element: <MyEnroll></MyEnroll>,
      },
      {
        path: "/dashboard/studentProf",
        element: <StudentProf></StudentProf>,
      },
    ],
  },
]);
