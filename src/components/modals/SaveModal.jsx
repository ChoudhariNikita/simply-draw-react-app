import React, { useState } from "react";

// Save modal component
const SaveModal = ({ isOpen, onClose, onSave }) => {
  const [fileName, setFileName] = useState("");

  const handleSave = () => {
    onSave(fileName);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Save Drawing</h2>
        <input
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder="Enter file name"
          className="border p-2 rounded w-full mb-4"
        />
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="bg-gray-300 p-2 rounded">Cancel</button>
          <button onClick={handleSave} className="bg-blue-500 text-white p-2 rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default SaveModal;