import React from "react";
import { Edit3, Eraser, Droplet } from "lucide-react";
import { TOOLS } from "../../constants";
import { SketchPicker } from "react-color";

// Tools component
const Tools = ({ tool, setTool, pencilSize, setPencilSize, eraserSize, setEraserSize, color, setColor, fillCanvas }) => (
  <aside className="w-1/4 bg-gray-200 p-4 ml-1 rounded-md">
    <h3 className="text-lg font-semibold mb-4 text-center">Tools</h3>
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2">
        <div className="relative group">
          <button
            onClick={() => setTool(TOOLS.PENCIL)}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              tool === TOOLS.PENCIL ? "bg-purple-600 text-white" : "bg-white text-gray-800"
            }`}
          >
            <Edit3 className="w-5 h-5" />
          </button>
        </div>
        <input
          type="range"
          min="1"
          max="20"
          value={pencilSize}
          onChange={(e) => setPencilSize(Number(e.target.value))}
          className="flex-grow"
        />
      </div>
      <div className="flex items-center space-x-2">
        <div className="relative group">
          <button
            onClick={() => setTool(TOOLS.ERASER)}
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              tool === TOOLS.ERASER ? "bg-purple-600 text-white" : "bg-white text-gray-800"
            }`}
          >
            <Eraser className="w-5 h-5" />
          </button>
        </div>
        <input
          type="range"
          min="1"
          max="20"
          value={eraserSize}
          onChange={(e) => setEraserSize(Number(e.target.value))}
          className="flex-grow"
        />
      </div>
      <div className="relative group mb-4">
        <button
          onClick={() => {
            setTool(TOOLS.FILL);
            fillCanvas();
          }}
          className={`w-full py-2 rounded-lg flex items-center justify-center ${
            tool === TOOLS.FILL ? "bg-purple-600 text-white" : "bg-white text-gray-800"
          }`}
        >
          <Droplet className="w-5 h-5" />
        </button>
        <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 w-max bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 z-50">
          Fill
        </span>
      </div>
      <div className="relative group">
        <SketchPicker
          color={color}
          onChangeComplete={(color) => setColor(color.hex)}
          className="w-full"
        />
        <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 w-max bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 z-50">
          Color Picker
        </span>
      </div>
    </div>
  </aside>
);

export default Tools;