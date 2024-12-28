import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top ${isVisible ? "show" : ""}`}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#0000CD",
        color: "white",
        border: "none",
        borderRadius: "50%",
        padding: "15px",
        fontSize: "20px",
        cursor: "pointer",
        display: isVisible ? "block" : "none",
        transition: "opacity 0.3s",
      }}
    >
      ↑
    </button>
  );
};

export default BackToTopButton;
