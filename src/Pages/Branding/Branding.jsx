import React from "react";

const Branding = () => {
  return (
    <div className="bg-base-200 py-20">
      <div className="max-w-screen-2xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-primary mb-8">Our Brand</h2>
        <p className="text-lg mb-12">
          We are committed to providing accessible, high-quality education to
          learners around the world. Our platform combines innovative technology
          with a passion for learning to empower individuals to achieve their
          goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Innovation
              </h3>
              <p className="text-justify">
                Our cutting-edge technology ensures an engaging and interactive
                learning experience for all users. We constantly update our
                platform with the latest advancements to keep our learners ahead
                of the curve.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Accessibility
              </h3>
              <p className="text-justify">
                We believe that education should be accessible to everyone,
                regardless of their location or financial situation. Our
                platform offers a wide range of free and affordable courses to
                cater to diverse needs.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Community
              </h3>
              <p className="text-justify">
                We foster a supportive and inclusive community where learners
                can connect, collaborate, and grow together. Our forums and
                discussion groups provide a space for meaningful interactions
                and shared learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
