import React, { useContext } from "react";
import { authContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginUser, loading } = useContext(authContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
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
        </div>
      </div>
    </div>
  );
};

export default Login;
