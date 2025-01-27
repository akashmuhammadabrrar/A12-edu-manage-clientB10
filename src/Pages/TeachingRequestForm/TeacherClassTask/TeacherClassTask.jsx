import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Modal from "react-modal";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const TeacherClassTask = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [item, setItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      const res = await axiosSecure.get(`/classes/${id}`);
      setItem(res.data);
    };
    fetchItem();
  }, [id, axiosSecure]);

  if (!item) {
    return <div>Loading...</div>;
  }
  const { enroll } = item;
  console.log(item);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const title = form.title.value;
    const description = form.description.value;
    const marks = form.marks.value;
    const date = form.date.value;
    console.table({ name, title, description, marks, date });

    const assignmentData = {
      name,
      title,
      description,
      marks,
      date,
    };

    try {
      // Send the PATCH request to update the class with the new assignment
      const response = await axiosSecure.patch(
        `/classes/${id}/assignments`,
        assignmentData
      );

      console.log("Assignment updated successfully", response.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Assignment Created Successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
      // Close the modal after submission
      setModalIsOpen(false);
    } catch (error) {
      console.error("Error updating assignment:", error);
    }
  };

  return (
    <div>
      <h1>Create Assignments Here</h1>
      <div className="rounded-lg flex flex-wrap justify-evenly items-center border-2 border-black h-16 w-full mx-auto ">
        <div className="bg-gray-300 h-14 w-1/4 ">
          <h2 className="text-center text-xl font-semibold">
            Total Assignments:{" "}
          </h2>
        </div>
        <div className="bg-gray-300 h-14 w-1/4">
          <h2 className="text-center text-xl font-semibold">
            Total Enrollments:- {enroll}
          </h2>
        </div>
        <div className="bg-gray-300 h-14 w-1/4 ">
          <h2 className="text-center text-xl font-semibold">Total Submits:</h2>
        </div>
      </div>
      <div>
        {/* button to open and close the modal */}
        <div className="my-6">
          <button
            onClick={() => setModalIsOpen(true)}
            className="btn btn-primary">
            Create Assignment
          </button>
        </div>
        <div className="w-1/2">
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            appElement={document.getElementById("root")}
            style={{
              content: {
                width: "400px", // Set the desired width
                height: "400px", // Set the desired height
                margin: "auto", // Center the modal
              },
            }}
            contentLabel="Create Assignment">
            <h2>Create New Assignment</h2>
            <form onSubmit={handleSubmit}>
              <div>
                {/* assignment Title */}
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Name</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    readOnly
                    defaultValue={user?.displayName}
                    className="input input-bordered w-full max-w-xs"
                  />
                  <div className="label"></div>
                </label>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Assignment Title</span>
                  </div>
                  <input
                    type="text"
                    name="title"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <div className="label"></div>
                </label>
                {/* Description */}
                <label className="form-control w-full max-w-xs">
                  <textarea
                    placeholder="Description"
                    name="description"
                    className="textarea textarea-bordered textarea-xs w-full max-w-xs"></textarea>
                  <div className="label"></div>
                </label>
                {/* marks */}
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Assignment Marks</span>
                  </div>
                  <input
                    type="number"
                    name="marks"
                    placeholder="Marks"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <div className="label"></div>
                </label>
                {/* date and time */}
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Assignment Deadline</span>
                  </div>
                  <input
                    type="date"
                    name="date"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <div className="label"></div>
                </label>
              </div>

              <button type="submit" className="btn btn-success">
                Create Assignment
              </button>
              <button
                type="button"
                onClick={() => setModalIsOpen(false)}
                className="btn btn-secondary ml-2">
                Cancel
              </button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default TeacherClassTask;
