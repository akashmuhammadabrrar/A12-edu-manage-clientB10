import React, { useContext } from "react";
import { authContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const { loginUser, loading } = useContext(authContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    loginUser(email, password).then((result) => {
      const user = result.user;
      // console.log(user);
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
          <h1 className="text-5xl font-bold">Please Login Here</h1>
          <p className="py-6">
            If You Have An Account Created In This Platform Then You Can Login
            Here. If Not Then Please Create An Account First To Access Our All
            Information And Data.
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
            {" "}
            <SocialLogin></SocialLogin>
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
