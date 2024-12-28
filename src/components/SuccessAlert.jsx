import React from "react";

// Success alert component
const SuccessAlert = ({ message, onClose }) => (
  <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
    <div className="flex justify-between items-center">
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-white">✕</button>
    </div>
  </div>
);

export default SuccessAlert;