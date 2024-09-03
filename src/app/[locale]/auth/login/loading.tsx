import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin"
      ></div>
    </div>
  );
}

export default Loading;
