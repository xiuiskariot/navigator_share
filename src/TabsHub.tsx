import { slidesData } from "./data";
import { ArrowRight } from "./assets/ArrowRight";
import { ArrowLeft } from "./assets/ArrowLeft";

export const TabsHub = ({
  setActiveTab,
  activeTab,
}: {
  setActiveTab: (index: number) => void;
  activeTab: number;
}) => {
  const handleClick = (index: number) => {
    setActiveTab(index);
  };
  const handleClickBack = () => {
    if (activeTab === 0) {
      setActiveTab(activeTab);
    } else {
      setActiveTab(activeTab - 1);
    }
  };
  const handleClickNext = () => {
    if (activeTab === Object.keys(slidesData).length - 1) {
      setActiveTab(Object.keys(slidesData).length - 1);
    } else {
      setActiveTab(activeTab + 1);
    }
  };
  return (
    <div className="tabs-hub-container">
      <div className="tabs-container">
        {Object.values(slidesData).map((slide, index) => (
          <button
            className={
              activeTab === index ? "tab-button active-tab" : "tab-button"
            }
            key={index}
            onClick={() => handleClick(index)}
          >
            {slide.title}
          </button>
        ))}
      </div>

      <div className="nav-buttons-container">
        <button onClick={handleClickBack} className="nav-button">
          <ArrowLeft />
        </button>
        <button onClick={handleClickNext} className="nav-button">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};
