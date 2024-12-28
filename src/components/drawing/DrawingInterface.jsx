import React from "react";
import Header from "../Header";
import Tools from "../drawing/Tools";
import Canvas from "../drawing/Canvas";
import SaveModal from "../modals/SaveModal";
import ConfirmationModal from "../modals/ConfirmationModal";
import SuccessAlert from "../SuccessAlert";
import { TOOLS } from "../../constants"; // Add this import statement

// Main drawing interface component
const DrawingInterface = ({
  canvasRef,
  tool = TOOLS.PENCIL,
  setTool,
  pencilSize = 5,
  setPencilSize,
  eraserSize = 5,
  setEraserSize,
  color = "#000000",
  setColor,
  startDrawing,
  draw,
  stopDrawing,
  clearCanvas,
  confirmClearCanvas,
  undo,
  redo,
  saveDrawing,
  fillCanvas,
  isSaveModalOpen,
  setIsSaveModalOpen,
  handleSave,
  isConfirmationModalOpen,
  setIsConfirmationModalOpen,
  isSuccessAlertVisible,
  setIsSuccessAlertVisible,
  hasLines = false,
  eraserPosition
}) => {
  return (
    <div className="min-h-screen bg-white flex flex-col p-4">
      <Header undo={undo} redo={redo} saveDrawing={saveDrawing} clearCanvas={clearCanvas} hasLines={hasLines} />
      <div className="flex flex-grow space-x-4 mt-4 relative">
        <Tools
          tool={tool}
          setTool={setTool}
          pencilSize={pencilSize}
          setPencilSize={setPencilSize}
          eraserSize={eraserSize}
          setEraserSize={setEraserSize}
          color={color}
          setColor={setColor}
          fillCanvas={fillCanvas}
        />
        <Canvas
          canvasRef={canvasRef}
          startDrawing={startDrawing}
          draw={draw}
          stopDrawing={stopDrawing}
          tool={tool}
          eraserSize={eraserSize}
          eraserPosition={eraserPosition}
        />
      </div>
      <SaveModal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        onSave={handleSave}
      />
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={() => setIsConfirmationModalOpen(false)}
        onConfirm={confirmClearCanvas}
        message="Are you sure you want to clear the canvas?"
      />
      {isSuccessAlertVisible && (
        <SuccessAlert
          message="Image saved successfully!"
          onClose={() => setIsSuccessAlertVisible(false)}
        />
      )}
    </div>
  );
};

export default DrawingInterface;