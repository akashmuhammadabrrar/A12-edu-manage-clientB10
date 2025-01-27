import React, { useState } from "react";
import Modal from "react-modal";

// Set the root element for accessibility
Modal.setAppElement("#root");

const ModalFeedBack = ({ isOpen, onRequestClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;
    console.log("Feedback:", feedback);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Feedback Modal"
      className="flex items-center justify-center"
      overlayClassName="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="text-xl mb-2 block" htmlFor="feedback">
              Your Valuable Feedback:
            </label>

            {/* sm */}
            <textarea
              placeholder="Say Whatever You Want"
              className="textarea textarea-bordered textarea-sm w-full max-w-xs"></textarea>
            {/* rating */}
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
          <div className="flex justify-start mt-4">
            <button className="btn btn-accent mr-2" type="submit">
              Submit
            </button>
            <button
              className="btn btn-error"
              type="button"
              onClick={onRequestClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalFeedBack;
