import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      if (dotRef.current) {
        dotRef.current.style.left = `${x}px`;
        dotRef.current.style.top = `${y}px`;
      }

      if (ringRef.current) {
        ringRef.current.style.left = `${x}px`;
        ringRef.current.style.top = `${y}px`;
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="w-2 h-2 bg-blue-500 fixed top-0 left-0 rounded-full pointer-events-none z-[9999] transition-transform duration-75"
      ></div>
      <div
        ref={ringRef}
        className="w-8 h-8 border-2 border-blue-400 fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-all duration-100"
      ></div>
    </>
  );
};

export default CustomCursor;

