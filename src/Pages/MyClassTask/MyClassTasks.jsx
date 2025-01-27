import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ModalFeedBack from "../FeedBackModal/ModalFeedBack";

const MyClassTasks = () => {
  const location = useLocation();
  const { enrollment } = location.state || {};
  const assignments = enrollment?.myClass?.assignments;
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log(assignments);

  if (!assignments) {
    return (
      <p className="text-3xl text-center my-8">Assignment is not arrived yet</p>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center my-6">
        My Assignments Tasks:
      </h2>
      <div className="flex justify-center items-center my-4">
        <button
          className="btn btn-neutral text-xl"
          onClick={() => setIsModalOpen(true)}>
          + Feedback Us
        </button>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Assignment Title</th>
                <th>Description:</th>
                <th>Total Marks</th>
                <th>Last Date:</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>{assignments.title}</td>
                <td>{assignments.description}</td>
                <td>{assignments.marks}</td>
                <td>{assignments.date}</td>
                <td>
                  <button className="btn btn-primary">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <ModalFeedBack
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default MyClassTasks;
