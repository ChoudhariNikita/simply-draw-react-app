import React from "react";
import { Save, Trash2, Undo, Redo } from "lucide-react";
import logo from "../assets/logo.svg"; // Adjust the path if necessary
import { useNavigate } from 'react-router-dom';

// Header component
const Header = ({
  undo,
  redo,
  saveDrawing,
  clearCanvas,
  hasLines = false
}) => {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <header className="bg-purple-600 shadow-sm h-16 flex items-center justify-between px-6 w-full mb-3">
      <div className="flex items-center">
        <img src={logo} alt="SimplyDraw Logo" className="h-8 w-8 mt-1 cursor-pointer" onClick={() => navigate('/')} />
        <div className="text-white font-bold text-xl cursor-pointer" onClick={() => navigate('/')}>SimplyDraw</div>
      </div>
      <div className="flex items-center space-x-4">
        <button onClick={undo} className="p-2 text-white hover:text-gray-200">
          <Undo className="w-5 h-5" />
        </button>
        <button onClick={redo} className="p-2 text-white hover:text-gray-200">
          <Redo className="w-5 h-5" />
        </button>
        <button onClick={saveDrawing} className={`p-2 text-white hover:text-gray-200 ${!hasLines ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!hasLines}>
          <Save className="w-5 h-5" />
        </button>
        <button
          onClick={clearCanvas}
          className={`p-2 text-white hover:text-gray-200 ${!hasLines ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!hasLines}
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;