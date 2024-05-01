import React from "react";

const ShareButton = ({ text }) => {
  const handleClick = async () => {
    try {
      await navigator.share({ url: window.location.href });
      console.log("Page shared successfully!");
    } catch (error) {
      console.error("Error sharing page:", error);
    }
  };

  return (
    <button onClick={handleClick} className="bg-button-secondary-color p-4 rounded-lg text-white mx-1">
      {text || "Share"}
    </button>
  );
};

export default ShareButton;
