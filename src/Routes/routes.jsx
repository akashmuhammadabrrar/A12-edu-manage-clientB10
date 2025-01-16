import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import TeachReqForm from "../Pages/TeachingRequestForm/TeachReqForm";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: (
      <h2 className="text-3xl text-center mt-56">404 Page Not Found</h2>
    ),
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
    ],
  },
]);
