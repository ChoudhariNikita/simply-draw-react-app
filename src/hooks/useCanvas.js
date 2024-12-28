import { useRef, useState, useEffect } from "react";
import { TOOLS } from "../constants";

// Custom hook for canvas operations
const useCanvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [tool, setTool] = useState(TOOLS.PENCIL);
  const [pencilSize, setPencilSize] = useState(5);
  const [eraserSize, setEraserSize] = useState(10);
  const [color, setColor] = useState("#000000");
  const [lines, setLines] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isSuccessAlertVisible, setIsSuccessAlertVisible] = useState(false);
  const [eraserPosition, setEraserPosition] = useState({ x: 0, y: 0 });

  // Initialize canvas and context
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth * 2; // For higher resolution
    canvas.height = canvas.offsetHeight * 2;
    context.scale(2, 2);
    context.lineCap = "round";
    context.lineJoin = "round";
    contextRef.current = context;
  }, []);

  // Update context properties based on tool and size changes
  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.strokeStyle = tool === TOOLS.PENCIL ? color : "#FFFFFF"; // Eraser uses white
      contextRef.current.lineWidth = tool === TOOLS.PENCIL ? pencilSize : eraserSize;
    }
  }, [color, tool, pencilSize, eraserSize]);

  // Get mouse position relative to canvas
  const getMousePos = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) * (canvas.width / rect.width),
      y: (event.clientY - rect.top) * (canvas.height / rect.height),
    };
  };

  // Start drawing
  const startDrawing = (event) => {
    const { x, y } = getMousePos(event);
    contextRef.current.beginPath();
    contextRef.current.moveTo(x, y);
    setIsDrawing(true);
  };

  // Draw on canvas
  const draw = (event) => {
    if (!isDrawing) return;
    const { x, y } = getMousePos(event);
    contextRef.current.lineTo(x, y);
    contextRef.current.stroke();
    if (tool === TOOLS.ERASER) {
      setEraserPosition({ x, y });
    }
  };

  // Stop drawing
  const stopDrawing = () => {
    if (!isDrawing) return;
    contextRef.current.closePath();
    setLines([...lines, canvasRef.current.toDataURL()]);
    setRedoStack([]); // Clear redo stack on new action
    setIsDrawing(false);
  };

  // Clear canvas with confirmation
  const clearCanvas = () => {
    setIsConfirmationModalOpen(true);
  };

  // Confirm clear canvas
  const confirmClearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    setLines([]);
    setRedoStack([]);
    setIsConfirmationModalOpen(false);
  };

  // Undo last action
  const undo = () => {
    if (lines.length === 0) return;
    const newRedoStack = [...redoStack, lines[lines.length - 1]];
    setRedoStack(newRedoStack);
    const newLines = lines.slice(0, -1);
    setLines(newLines);

    redrawCanvas(newLines);
  };

  // Redo last undone action
  const redo = () => {
    if (redoStack.length === 0) return;
    const lastRedo = redoStack[redoStack.length - 1];
    const newLines = [...lines, lastRedo];
    setRedoStack(redoStack.slice(0, -1));
    setLines(newLines);

    redrawCanvas(newLines);
  };

  // Redraw canvas from lines
  const redrawCanvas = (lines) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    const image = new Image();
    lines.forEach((line) => {
      image.src = line;
      image.onload = () => {
        context.drawImage(image, 0, 0, canvas.width / 2, canvas.height / 2);
      };
    });
  };

  // Open save modal
  const saveDrawing = () => {
    setIsSaveModalOpen(true);
  };

  // Handle save drawing
  const handleSave = (fileName) => {
    if (fileName) {
      const link = document.createElement("a");
      link.download = `${fileName}.png`;
      link.href = canvasRef.current.toDataURL();
      link.click();
      setIsSuccessAlertVisible(true);
      setTimeout(() => setIsSuccessAlertVisible(false), 3000);
    }
  };

  // Fill canvas with color
  const fillCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = color;
    context.fillRect(0, 0, canvas.width, canvas.height);
    setLines([...lines, canvas.toDataURL()]);
    setRedoStack([]);
  };

  // Handle color change
  const handleColorChange = (newColor) => {
    setColor(newColor);
    setTool(TOOLS.PENCIL);
  };

  return {
    canvasRef,
    tool,
    setTool,
    pencilSize,
    setPencilSize,
    eraserSize,
    setEraserSize,
    color,
    setColor: handleColorChange,
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
    hasLines: lines.length > 0,
    eraserPosition,
  };
};

export default useCanvas;