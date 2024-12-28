import React from "react";

// Confirmation modal component
const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
        <p className="mb-4">{message}</p>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-300 p-2 rounded">Cancel</button>
          <button onClick={onConfirm} className="bg-red-500 text-white p-2 rounded">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;