import React from "react";
import Header from "../Header";
import Tools from "./Tools";
import Canvas from "./Canvas";
import SaveModal from "../modals/SaveModal";
import ConfirmationModal from "../modals/ConfirmationModal";
import SuccessAlert from "../SuccessAlert";
import useCanvas from "../../hooks/useCanvas";

// Main drawing interface component
const DrawingInterface = () => {
  const {
    canvasRef,
    tool,
    setTool,
    pencilSize,
    setPencilSize,
    eraserSize,
    setEraserSize,
    color,
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
    hasLines,
    eraserPosition,
  } = useCanvas();

  return (
    <div className="min-h-screen bg-white flex flex-col p-1">
      <Header undo={undo} redo={redo} saveDrawing={saveDrawing} clearCanvas={clearCanvas} hasLines={hasLines} className="mb-1" />
      <div className="flex flex-grow space-x-4 mt-4 relative mx-2">
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
        <div className="flex-grow max-w-full mr-2">
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