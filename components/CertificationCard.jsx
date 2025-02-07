import React from "react";
import { useState } from "react";

export const CertificationCard = ({ imageUrl, title, description, date }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Certification Card */}
      <div
        className="cursor-pointer transform transition-transform hover:scale-105"
        onClick={openModal}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-64 h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-tonal-a10 rounded-lg p-6 max-w-lg w-full"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <h2 className="text-xl font-bold mb-4 text-zinc-200">{title}</h2>
            <p className="text-zinc-400 mb-4">{description}</p>
            <p className="text-sm text-gray-500">Issued on: {date}</p>
            <button
              className="mt-4 px-4 py-2 bg-primary-a30 text-white rounded hover:bg-primary-a10"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
