import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-gray-500 font-medium">Loading data...</p>
      </div>
    </div>
  );
};

export default Loading;