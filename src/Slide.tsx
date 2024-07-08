import React from "react";
import { slidesData } from "./data";
import { MainContent } from "./assets/MainContent";

export const Slide = ({ activeTab }: { activeTab: number }) => {
  const shareData = {
    title: "MDN",
    text: "Learn web development on MDN!",
    url: "https://developer.mozilla.org",
  };




  const handleClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Something",
          text: "Hello, please come visit my website",
          url: "https://developer.mozilla.org",
        })
        .then(() => {
          console.log("Successfully shared");
        })
        .catch((error) => {
          console.error("Something went wrong", error);
        });
    }
  };

  return (
    <div className="slide-container">
      <div style={{ maxWidth: "680px", height: "460px" }}>
        <MainContent />
      </div>
      <button onClick={handleClick}>Поделиться</button>

      <div>
        <h2>{Object.values(slidesData)[activeTab].title}</h2>
        <div>{Object.values(slidesData)[activeTab].slideText}</div>

        <button className="slide-button">
          {" "}
          {Object.values(slidesData)[activeTab].buttonText}
        </button>
      </div>
    </div>
  );
};
