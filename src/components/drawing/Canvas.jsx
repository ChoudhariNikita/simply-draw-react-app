import React from "react";
import { TOOLS } from "../../constants"; // Import TOOLS constant

// Canvas component
const Canvas = ({ canvasRef, startDrawing, draw, stopDrawing, tool, eraserSize, eraserPosition }) => (
  <div className="flex-grow bg-white flex justify-center items-center relative">
    <canvas
      ref={canvasRef}
      className="bg-white border border-gray-200 shadow-md rounded-md"
      style={{ width: "95%", height: "100%" }}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
    />
    {tool === TOOLS.ERASER && (
      <div
        className="absolute border border-gray-500 rounded-full pointer-events-none"
        style={{
          width: eraserSize,
          height: eraserSize,
          left: eraserPosition.x - eraserSize / 2,
          top: eraserPosition.y - eraserSize / 2,
        }}
      />
    )}
  </div>
);

export default Canvas;