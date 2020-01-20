import React from "react";

const ReactColorCircle = props => {
  const { width, height, color, text } = props;
  return (
    <div
      style={{
        width: width || 100,
        height: height || 100,
        backgroundColor: color || "blue",
        borderRadius: 9000
      }}
    >
      {text}.
    </div>
  );
};

export default ReactColorCircle;
