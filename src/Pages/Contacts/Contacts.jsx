import React from "react";
import Swal from "sweetalert2";

const Contacts = () => {
  const handleMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const message = formData.get("message");
    Swal.fire("Message Sent Successfully");
    console.log(email, message);

    form.reset();
  };

  return (
    <div className="max-w-screen-2xl mx-auto mt-20 pt-10">
      <div className="hero bg-base-200 max-w-screen-2xl mx-auto my-10">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Contact With Us</h1>

            <p className="py-6 text-justify">
              If You Have An Account Created In This Platform Then You Can Login
              Here. If Not, Please Create An Account First.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleMessage} className="card-body">
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
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="textarea input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-info font-bold"
                  value="Send"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
