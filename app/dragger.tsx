"use client";
import { useState } from "react";
import { DraggableCore, DraggableData, DraggableEvent } from "react-draggable";
import Draggable from "react-draggable";

type DraggableProps = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Dragger({ children }: DraggableProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onDragStart = (e: DraggableEvent, data: DraggableData) => {
    setPosition({
      x: position.x + data.deltaX,
      y: position.y + data.deltaY,
    });
  };

  return (
    <DraggableCore onDrag={onDragStart}>
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
        className="cursor-move"
      >
        <Draggable>
          <p className="text-center px-4 py-2 w-40 mx-auto mb-4 text-green-800 bg-green-200 rounded-lg shadow">
            x: {position.x} y: {position.y}
          </p>
        </Draggable>
        <Draggable>{children}</Draggable>
      </div>
    </DraggableCore>
  );
}
