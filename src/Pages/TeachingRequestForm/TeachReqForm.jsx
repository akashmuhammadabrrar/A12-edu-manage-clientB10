import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const TeachReqForm = () => {
  const axiosSecure = useAxiosSecure();

  const { user } = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // send data to the server
    const teacherData = {
      name: data.name,
      email: data.email,
      title: data.title,
      image: data.image,
      experience: data.categoryExp,
      category: data.categorySkill,
      status: "Pending",
    };
    console.table({ teacherData });
    const teacherRes = await axiosSecure.post("/teacher-req", teacherData);
    console.log(teacherRes.data);
    if (teacherRes.data.insertedId) {
      // show success popup
    }
  };

  return (
    <div>
      <h2 className="text-3xl text-center my-6">
        Request For To Become A Teacher
      </h2>

      <div className="bg-gray-200 w-full min-h-screen p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center items-center gap-2">
            {/* email */}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">What is your name?</span>
              </div>
              <input
                {...register("name")}
                defaultValue={user?.displayName}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            {/* name */}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Your Email</span>
              </div>
              <input
                {...register("email")}
                type="text"
                defaultValue={user?.email}
                readOnly
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <div className="flex justify-center items-center gap-2">
            {/* title */}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Give The Title</span>
              </div>
              <input
                {...register("title")}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            {/* photo url */}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Your Photo Url</span>
              </div>
              <input
                {...register("image")}
                defaultValue={user?.photoURL}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          {/* select for experience */}
          <div className="flex justify-center items-center gap-2 mt-4">
            <select
              defaultValue=""
              {...register("categoryExp", { required: true })}
              className="select select-bordered w-full max-w-xs">
              <option disabled value="">
                Select A Category
              </option>
              <option value="Experienced">Experienced</option>
              <option value="Beginner">Beginner</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Junior">Junior</option>
            </select>
            <select
              defaultValue=""
              {...register("categorySkill")}
              className="select select-bordered w-full max-w-xs">
              <option disabled value="">
                Select A Category
              </option>
              <option value="Web Development">Web Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphics Design">Graphics Design</option>
              <option value="App Development">App Development</option>
              <option value="Game Development">Game Development</option>
              <option value="SEO Development">SEO Development</option>
            </select>
          </div>
          <div className="flex justify-center ">
            <input
              className="btn btn-accent btn-wide mt-4 "
              type="submit"
              value="Submit For Review"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeachReqForm;
