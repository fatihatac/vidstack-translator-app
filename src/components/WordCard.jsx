import React from "react";

function WordCard({ word, setIsCardHovered }) {
  function onMouseEnter() {
    setIsCardHovered(true);
  }

  function onMouseLeave() {
    setIsCardHovered(false);
  }
  function handleClick() {
    console.log("clicked");
  }
  return (
    <div
      className="word-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="content">
        <div className="word-header">
          <span className="card-word">{word}</span>
          <button className="add-button" onClick={handleClick}>
            +
          </button>
        </div>
        <div className="translation-section">
          <div className="primary-translation">ne zaman</div>
          <div className="meanings">
            <div className="meaning">
              <span className="definition">zaman, vakit</span>
              <span className="type">isim</span>
            </div>
            <div className="meaning">
              <span className="definition">ne zaman, ne zamandan kalma</span>
              <span className="type">zamir</span>
            </div>
            <div className="meaning">
              <span className="definition">ne zaman, iken, -dığı zaman</span>
              <span className="type">zarf</span>
            </div>
            <div className="meaning">
              <span className="definition">ne zaman, iken, gerektiğinde</span>
              <span className="type">bağlaç</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WordCard;
