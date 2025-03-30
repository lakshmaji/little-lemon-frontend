import React from "react";

const ExternalRedirectBtn = ({ url, children }) => {
  const handleRedirect = () => {
    window.location.href = url;
  };

  return (
    <button onClick={handleRedirect} className="footer-btn">
      {children || "Go to External Website"}
    </button>
  );
};

export default ExternalRedirectBtn;
