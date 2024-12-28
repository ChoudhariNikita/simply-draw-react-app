import React from "react";
import { TOOLS } from "../../constants"; // Import TOOLS constant

// Canvas component
const Canvas = ({ canvasRef, startDrawing, draw, stopDrawing, tool, eraserSize, eraserPosition }) => (
  <div className="flex-grow bg-white flex justify-center items-center relative" style={{ height: "100%" }}>
    <canvas
      ref={canvasRef}
      className="bg-white border border-gray-200 shadow-md rounded-md mr-0.5rem"
      style={{ width: "100%", height: "100%" }}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
    />
    {/* Remove the eraser size indicator */}
  </div>
);

export default Canvas;