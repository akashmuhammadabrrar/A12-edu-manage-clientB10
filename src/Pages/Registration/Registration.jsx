import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../Providers/AuthProvider";

const Registration = () => {
  const { createUser } = useContext(authContext);

  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.table({ email, password, name, photo });
    createUser(email, password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
    });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Registration Here</h1>
          <p className="py-6">
            If You're New To This Platform Then Please Create An Account
            First.Or If You Already Have An Account Then Login Here By Your
            Email And Password.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegistration} className="card-body">
            {/* email */}
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
            {/* Name Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Password */}
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
              {/* Photo url */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="mt-4">
                <Link to="/login" className=" text-blue-600 link link-hover">
                  Already Have An Account..?
                </Link>
              </div>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-info font-bold"
                value="Registration"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
