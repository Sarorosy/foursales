// LeadCaptureModal.js
import React, { useState } from 'react';

const LeadCaptureModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to a server)
    console.log('Lead captured:', { name, email });
    onClose(); // Close the modal after submission
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ zIndex: 1000 }}
    >
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Capture Leads</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded p-2"
          >
            Submit
          </button>
        </form>
        <button onClick={onClose} className="mt-4 text-blue-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default LeadCaptureModal;
