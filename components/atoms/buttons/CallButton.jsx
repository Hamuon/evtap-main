import React from "react";

const CallButton = ({ phoneNumber, text }) => {
  const handleClick = () => {
    if (phoneNumber) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <a href={`tel:${phoneNumber}`} onClick={handleClick} className="bg-button-primary-color text-white p-4 rounded-lg mx-1">
      {text}
    </a>
  );
};

export default CallButton;
