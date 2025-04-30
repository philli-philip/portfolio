"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import { ExampleType } from "../data/data";
import { cn } from "../../../utils/cn";

export default function Example({ example }: { example: ExampleType }) {
  const [width, setWidth] = useState(1200);
  const [active, setActive] = useState<"layout" | "area">("layout");
  const [hover, setHover] = useState<"layout" | "area" | "null">("null");
  const isDragging = useRef(false);
  const startX = useRef(0);
  const initialWidth = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the resizable container

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.clientX;
    initialWidth.current = containerRef.current?.offsetWidth ?? width; // Use actual width if available
    // Prevent text selection during drag
    e.preventDefault();
    // Add global listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current) return;
    const currentX = e.clientX;
    const deltaX = currentX - startX.current;
    const newWidth = initialWidth.current + deltaX;
    // Optional: Add min/max width constraints
    // const minWidth = 100;
    // const maxWidth = 500;
    // setWidth(Math.max(minWidth, Math.min(newWidth, maxWidth)));
    setWidth(Math.max(50, newWidth)); // Set a minimum width of 50px
  }, []); // No dependencies needed as refs are stable

  const handleMouseUp = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
      // Remove global listeners
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
  }, [handleMouseMove]); // Dependency on handleMouseMove

  // Cleanup listeners on component unmount
  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div className="flex flex-col gap-4 pb-12">
      <div className="flex flex-row items-end justify-between pr-0 font-medium lg:pr-6 dark:text-gray-200">
        <span>{example.title}</span>
        <span className="rounded-full bg-gray-200 p-0.5 text-sm dark:bg-gray-950">
          <button
            onClick={() => {
              setActive("layout");
              setHover("null");
            }}
            onMouseEnter={() => {
              setActive("layout");
              setHover("layout");
            }}
            onMouseLeave={() => {
              hover === "layout" && setActive("area");
              setHover("null");
            }}
            className={cn(
              "rounded-full px-4 py-1",
              active === "layout"
                ? "bg-white shadow-sm dark:bg-gray-700"
                : "bg-transparent shadow-none"
            )}
          >
            Layout
          </button>
          <button
            onClick={() => {
              setActive("area");
              setHover("null");
            }}
            onMouseEnter={() => {
              setActive("area");
              setHover("area");
            }}
            onMouseLeave={() => {
              hover === "area" && setActive("layout");
              setHover("null");
            }}
            className={cn(
              "rounded-full px-4 py-1",
              active === "area"
                ? "bg-white shadow-sm dark:bg-gray-700"
                : "bg-transparent shadow-none"
            )}
          >
            Area
          </button>
        </span>
      </div>
      <div className="flex flex-row items-center">
        <div
          ref={containerRef} // Add ref to the resizable div
          className="relative max-h-[800px] min-h-48 grow overflow-hidden rounded-lg border border-gray-200  dark:border-gray-700 "
          style={{ minWidth: "50px", maxWidth: `${width}px` }}
        >
          {example.layout}
        </div>
        <div
          className="group cursor-col-resize touch-none p-2 lg:block"
          onMouseDown={handleMouseDown}
        >
          <div className="h-6 w-1.5 rounded-full bg-gray-500 group-hover:bg-gray-700 dark:bg-gray-300 group-hover:dark:bg-gray-400" />
        </div>
      </div>
      <span className="max-w-[60ch] text-sm leading-normal text-gray-600 dark:text-gray-400">
        {example.description}
      </span>
    </div>
  );
}
