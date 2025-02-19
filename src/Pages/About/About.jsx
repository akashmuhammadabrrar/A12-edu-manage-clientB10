import React from "react";

const About = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-20">
        <h2 className="text-4xl font-bold text-center text-primary my-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
              What is Digital Educational Platform?
            </div>
            <div className="collapse-content">
              <p>
                A digital educational platform is an online system that provides
                learners with access to educational content and resources. It
                allows for the delivery of courses, assessments, and interactive
                learning experiences through the internet, making education more
                accessible and flexible.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do I enroll in a course?
            </div>
            <div className="collapse-content">
              <p>
                To enroll in a course, simply browse through the available
                courses on the platform, select the one you're interested in,
                and click on the "Enroll" button. You may need to create an
                account and provide payment information if the course requires a
                fee.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What are the benefits of online education?
            </div>
            <div className="collapse-content">
              <p>
                Online education offers numerous benefits, including
                flexibility, diverse course offerings, personalized learning
                experiences, cost-effectiveness, access to global expertise,
                interactive learning tools, career advancement opportunities,
                and environmental sustainability.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do I track my progress?
            </div>
            <div className="collapse-content">
              <p>
                Most digital educational platforms provide progress tracking
                features. You can view your progress through your user
                dashboard, which typically shows completed modules, upcoming
                assignments, and overall performance metrics.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What support is available for students?
            </div>
            <div className="collapse-content">
              <p>
                Digital educational platforms often provide various support
                options, including discussion forums, live chat with
                instructors, email support, and access to additional resources
                such as tutorials and FAQs to help students with their learning
                journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
