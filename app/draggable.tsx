"use client";

import { useState } from "react";
import { DraggableCore } from "react-draggable";

type DraggableProps = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Draggable({ children }: DraggableProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <DraggableCore
      onDrag={(e, data) =>
        setPosition({
          x: position.x + data.deltaX,
          y: position.y + data.deltaY,
        })
      }
    >
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          cursor: "move",
        }}
      >
        <p className="text-center px-4 py-2 w-40 mx-auto mb-4 text-green-800 bg-green-200 rounded-lg shadow">
          x: {position.x} y: {position.y}
        </p>
        {children}
      </div>
    </DraggableCore>
  );
}
