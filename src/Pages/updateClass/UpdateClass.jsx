import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const UpdateClass = () => {
  const { user } = useAuth();
  const { id } = useParams();
  console.log(id);
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const image = data.image;
    console.log(data);
    // // send data to the server
    const updateInfo = {
      image: image,
      price: data.price,
      title: data.title,
      description: data.description,
    };
    console.table({ updateInfo });
    // -------------
    const teacherRes = await axiosSecure.put(`/classes/${id}`, updateInfo);
    console.log(teacherRes.data);
    if (teacherRes.data.modifiedCount > 0) {
      // show success popup
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Class Updated Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <h2 className="text-3xl text-center my-6">Here We Update The Class</h2>
      <div className="flex justify-center items-center my-6 ml-16">
        <button className="btn btn-primary btn-wide font-bold">
          Feed Back
        </button>
      </div>
      {/* update form */}
      <div>
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
              value="Update Class"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateClass;
