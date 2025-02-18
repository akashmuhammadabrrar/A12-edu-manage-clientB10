import React, { useState, useContext } from "react";
import { authContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const { loginUser, loading } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  if (loading) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = credentials;

    loginUser(email, password).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  // Static credentials for user, admin, and teacher
  const fillCredentials = (role) => {
    if (role === "admin") {
      setCredentials({ email: "instuctor@gmail.com", password: "123456" });
    } else if (role === "teacher") {
      setCredentials({ email: "avatar@gmail.com", password: "123456" });
    } else {
      setCredentials({ email: "rasel@gmail.com", password: "123456" });
    }
  };

  return (
    <div className="hero bg-base-200 max-w-screen-2xl mx-auto my-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Please Login Here</h1>
          <div className="divider">+</div>
          <div className="flex justify-evenly">
            <button
              className="btn btn-info"
              onClick={() => fillCredentials("user")}>
              User Credentials
            </button>
            <button
              className="btn btn-info"
              onClick={() => fillCredentials("admin")}>
              Admin Credentials
            </button>
            <button
              className="btn btn-info"
              onClick={() => fillCredentials("teacher")}>
              Teacher Credentials
            </button>
          </div>

          <p className="py-6 text-justify">
            If You Have An Account Created In This Platform Then You Can Login
            Here. If Not, Please Create An Account First.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                required
              />
              <div className="mt-4">
                <Link
                  to="/registration"
                  className=" link link-hover text-blue-600">
                  New In This Website..? Sign up first
                </Link>
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-info font-bold"
                value="Login"
              />
            </div>
          </form>
          <div className="divider">Or</div>
          <div className="flex justify-center">
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

/**
 * import React, { useContext, useState } from "react";
import { authContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const { loginUser } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // State for email and password
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // Function to auto-fill login details
  const fillCredentials = (role) => {
    const demoUsers = {
      user: { email: "user@example.com", password: "user1234" },
      admin: { email: "admin@example.com", password: "admin1234" },
      superAdmin: { email: "superadmin@example.com", password: "superadmin1234" },
    };

    setCredentials(demoUsers[role]);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(credentials.email, credentials.password).then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign in to your Account</h1>
          <p className="py-6">Use demo credentials to quickly log in.</p>
          <div className="flex gap-2">
            <button className="btn btn-sm btn-primary" onClick={() => fillCredentials("user")}>
              User Credentials
            </button>
            <button className="btn btn-sm btn-secondary" onClick={() => fillCredentials("admin")}>
              Admin Credentials
            </button>
            <button className="btn btn-sm btn-accent" onClick={() => fillCredentials("superAdmin")}>
              Super Admin Credentials
            </button>
          </div>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                value={credentials.email}
                onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                value={credentials.password}
                onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                required
              />
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-info font-bold" value="Login" />
            </div>
          </form>
          <div className="divider">Or</div>
          <div className="flex justify-center">
            <SocialLogin />
          </div>
          <div className="mt-4 text-center">
            <Link to="/registration" className="link link-hover text-blue-600">
              New here? Sign up first
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

 * **/
