import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  // State to track whether the button should be visible
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      // Check if the scroll position is greater than 100px
      if (window.scrollY > 100) {
        setIsVisible(true); // Show the button
      } else {
        setIsVisible(false); // Hide the button
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the top
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
        display: isVisible ? "block" : "none", // Only show when isVisible is true
        transition: "opacity 0.3s",
      }}
    >
      ↑
    </button>
  );
};

export default BackToTopButton;
