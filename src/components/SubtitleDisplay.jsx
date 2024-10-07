import React, { useState } from "react";
import WordCard from "./WordCard";

function SubtitleDisplay({
  currentSubtitle,
  isControlsVisible,
  isPlaying,
  setIsPaused,
}) {
  const [hoveredWord, setHoveredWord] = useState(null);
  const [isCardHovered, setIsCardHovered] = useState(null);

  function getWordsFromSubtitle(subtitle) {
    if (!subtitle) return [];
    const wordsAndPunctuation = subtitle
      .replace(/<[^>]*>|\n/g, " ")
      // .split(/(\s+|[.,!?;:])/)
      // .split(/(\s+|[.,!?;:()\\[\]])/)
      .split(/(\s+|[.,!?;:()[\]-])/)
      .filter((word) => word.trim() !== "");

    return wordsAndPunctuation;
  }
  function isPunctuation(word) {
    // return /[.,!?;:]/.test(word); // Noktalama işareti kontrolü
    return /[.,!?;:()[\]-]/.test(word);
  }

  function handleMouseEnter(event) {
    // console.log(event.target.innerText);

    if (isPlaying) {
      console.log("durdur");
      setIsPaused(true);
    }
  }

  function handleMouseLeave() {
    if (!isPlaying) {
      console.log("devam et");
      setIsPaused(false);
    }
  }

  function handleWordMouseEnter(event) {
    setHoveredWord(event.target.innerText);
  }

  function handleWordMouseLeave() {
    if (!isCardHovered) {
      setHoveredWord(null);
    }
  }

  return (
    <div className="vds-captions">
      <div
        className="subtitle-container"
        style={{
          bottom: isControlsVisible ? "75px" : "10px",
          transition: "0.3s ease-in",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="cues">
          <span>
            {getWordsFromSubtitle(currentSubtitle).map((word, index) => (
              <span key={index} style={{ position: "relative" }}>
                {!isPunctuation(word) ? (
                  <span
                    className="word"
                    onMouseEnter={handleWordMouseEnter}
                    onMouseLeave={handleWordMouseLeave}
                  >
                    {word}
                  </span>
                ) : (
                  word
                )}
                {hoveredWord && hoveredWord === word && (
                  <WordCard word={word} setIsCardHovered={setIsCardHovered} />
                )}
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SubtitleDisplay;
