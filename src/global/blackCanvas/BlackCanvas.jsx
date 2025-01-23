import React, { useState } from "react";

export default function BlackCanvas() {
  const [canvasState, setCanvasState] = useState(true);
  const handleClose = () => {
    setCanvasState(false);
  };
  if (!canvasState) return null;
  return (
    <div className="absolute h-s w-full z-[100]">
      <div
        className="h-svh bg-black bg-opacity-45 cursor-pointer"
        onClick={handleClose}
      >
        <h1 className="text-white text-3xl">HIIIIII</h1>
      </div>
    </div>
  );
}
