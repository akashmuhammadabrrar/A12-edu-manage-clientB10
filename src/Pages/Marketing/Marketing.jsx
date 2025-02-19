import React from "react";

const Marketing = () => {
  return (
    <div className="bg-base-200 py-20">
      <div className="max-w-screen-2xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-primary mb-8">
          Why Choose Our Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-[80%] h-[80%] mx-auto"
                src="https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/shethepeople/media/media_files/WA2IzHHQolkOUxd72L7z.jpg"
                alt="Flexibility and Convenience"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Flexibility and Convenience
              </h3>
              <p className="text-justify">
                Access your courses anytime, anywhere, and balance your studies
                with your personal and professional life. Our platform adapts to
                your schedule, offering unparalleled flexibility.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-[80%] h-[80%] mx-auto"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrcgBsuC-JkTm7UxiyecOH7tejIqwgVBttuQ&s"
                alt="Diverse Course Offerings"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Diverse Course Offerings
              </h3>
              <p className="text-justify">
                Explore a wide range of courses across various disciplines.
                Whether you're interested in technical skills, arts, or language
                learning, our platform has something for everyone.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-[80%] h-[80%] mx-auto"
                src="https://img.freepik.com/free-photo/side-view-people-studying-math_23-2150444925.jpg"
                alt="Expert Instructors"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Expert Instructors
              </h3>
              <p className="text-justify">
                Learn from the best in the industry. Our courses are taught by
                experienced professionals and experts who bring real-world
                insights and practical knowledge to the classroom.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-[80%] h-[80%] mx-auto"
                src="https://5.imimg.com/data5/SELLER/Default/2024/1/377085875/GH/EP/HY/43649888/adobestock-377911924-scaled-500x500.jpeg"
                alt="Interactive Learning Tools"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Interactive Learning Tools
              </h3>
              <p className="text-justify">
                Engage with interactive tools and resources that enhance your
                learning experience. From video lectures to virtual simulations,
                our platform keeps you motivated and involved.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-[80%] h-[80%] mx-auto"
                src="https://media.istockphoto.com/id/1369906018/photo/quality-over-price-balance-concept-hand-choosing-wooden-block-cube-with-word-quality-versus.jpg?s=612x612&w=0&k=20&c=rlelOJQlLxnGqy_7J8XO_Hrwtfq9e2Ang1PFawx8_JE="
                alt="Affordable Pricing"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Affordable Pricing
              </h3>
              <p className="text-justify">
                Get access to high-quality education at competitive prices. We
                offer a range of free and affordable courses to ensure that
                everyone has the opportunity to learn and grow.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-[80%] h-[80%] mx-auto"
                src="https://media.istockphoto.com/id/625736338/photo/stack-of-hands-showing-unity.jpg?s=612x612&w=0&k=20&c=20mAQjGRQ5XVKqHe2qFguqGZ4dwto6lxxinciCfnVI0="
                alt="Community Support"
              />
            </figure>
            <div className="card-body">
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                Community Support
              </h3>
              <p className="text-justify">
                Join a thriving community of learners. Connect, collaborate, and
                share your experiences with fellow students through our
                discussion forums and group activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
