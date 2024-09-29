import React from "react";

function SubtitleDisplay({
  currentSubtitle,
  isControlsVisible,
  isPlaying,
  setIsPaused,
  setControlsVisible,
}) {
  function getWordsFromSubtitle(subtitle) {
    if (!subtitle) return [];
    const wordsAndPunctuation = subtitle
      .replace(/<[^>]*>|\n/g, " ")
      // .split(/(\s+|[.,!?;:])/)
      .split(/(\s+|[.,!?;:()\\[\]])/)
      .filter((word) => word.trim() !== "");

    return wordsAndPunctuation;
  }
  function isPunctuation(word) {
    // return /[.,!?;:]/.test(word); // Noktalama işareti kontrolü
    return /[.,!?;:()[\]]/.test(word);
  }

  function handleClick(event) {
    console.log(event.target.innerText);
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

  return (
    <div
      className="subtitle-container"
      style={{
        bottom: isControlsVisible ? "75px" : "10px",
        transition: "0.3s ease-in",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {getWordsFromSubtitle(currentSubtitle).map((word, index) => (
        <span key={index}>
          {!isPunctuation(word) ? (
            <span onClick={handleClick} className="word">
              {word}
            </span>
          ) : (
            word
          )}
        </span>
      ))}
    </div>
  );
}

export default SubtitleDisplay;
