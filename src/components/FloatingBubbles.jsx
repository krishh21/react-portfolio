import React from "react";
import "../index.css";

const FloatingBubbles = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => (
        <span
          key={i}
          className={`absolute w-3 h-3 rounded-full bg-blue-400 opacity-30 animate-float bubble-${i}`}
        ></span>
      ))}
    </div>
  );
};

export default FloatingBubbles;
