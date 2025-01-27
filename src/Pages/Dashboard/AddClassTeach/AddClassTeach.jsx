import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";

const AddClassTeach = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const image = data.image;
    // console.log(data);
    // // send data to the server
    const classInfo = {
      name: user?.displayName,
      email: user?.email,
      image: image,
      price: data.price,
      title: data.title,
      experience: data.experience,
      description: data.description,
      status: "Pending",
    };
    console.table({ classInfo });
    // -------------
    const teacherRes = await axiosSecure.post(
      `https://edu-manage-server-three.vercel.app/classes`,
      classInfo
    );
    // console.log(teacherRes.data);
    if (teacherRes.data.insertedId) {
      // show success popup
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Class Added Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/myAddedClass");
    }
  };

  return (
    <div className="mt-10 ml-20">
      <h2 className="text-xl text-center">Add Class Form</h2>

      {/* form for add class */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center gap-2">
          {/* email */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">My Name Is</span>
            </div>
            <input
              {...register("name")}
              defaultValue={user?.displayName}
              readOnly
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          {/* name */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">My Email Address</span>
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
          {/* price */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Give The Price</span>
            </div>
            <input
              {...register("price")}
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        {/* Description   */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <textarea
            {...register("description")}
            placeholder="Description"
            className="textarea textarea-bordered font-bold textarea-xs w-full max-w-xs"></textarea>
          {/* photo url */}
          <label className="form-control w-full max-w-xs">
            <input
              {...register("image")}
              type="text"
              placeholder="Photo url of class"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="flex justify-center items-center mt-4">
          <select
            defaultValue=""
            {...register("experience", { required: true })}
            className="select select-bordered w-full max-w-xs">
            <option disabled value="">
              Select A Category
            </option>
            <option value="Experienced">Experienced</option>
            <option value="Beginner">Beginner</option>
            <option value="Mid Level">Mid Level</option>
            <option value="Junior">Junior</option>
          </select>
        </div>
        <div className="flex justify-center ">
          <input
            className="btn btn-accent btn-wide mt-4 "
            type="submit"
            value="Add Class"
          />
        </div>
      </form>
    </div>
  );
};

export default AddClassTeach;
