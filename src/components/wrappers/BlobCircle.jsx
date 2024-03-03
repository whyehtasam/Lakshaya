import React from "react";

const BlobCircle = ({ width = '100%', height = '100%' }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 1191 1191">
      <circle cx="50%" cy="50%" r="25%" fill="pink" fillOpacity="0.2" />
      <circle cx="50%" cy="50%" r="40%" fill="pink" fillOpacity="0.2" />
      <circle cx="50%" cy="50%" r="50%" fill="pink" fillOpacity="0.2" />
    </svg>
  );
};

export default BlobCircle;
