import React from "react";

const ShareButton = ({ text, handleClick }) => {

  return (
    <button onClick={handleClick} className="bg-button-secondary-color p-4 rounded-lg text-white mx-1">
      {text || "Share"}
    </button>
  );
};

export default ShareButton;
