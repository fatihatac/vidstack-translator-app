import React from "react";

function SubtitleDisplay({
  currentSubtitle,
  isControlsVisible,
  setIsPlaying,
  onMouseEnter,
}) {
  function getWordsFromSubtitle(subtitle) {
    if (!subtitle) return [];
    // const cleanedSubtitle = removeHtmlTags(subtitle);
    const wordsAndPunctuation = subtitle
      .replace(/<[^>]*>|\n/g, " ")
      .split(/(\s+|[.,!?;:])/)
      .filter((word) => word.trim() !== "");

    return wordsAndPunctuation;
  }
  function isPunctuation(word) {
    return /[.,!?;:]/.test(word); // Noktalama işareti kontrolü
  }

  function handleClick(event) {
    console.log(event.target.innerText);
  }

  function handleMouseEnter(event) {
    // console.log(event.target.innerText);
  }

  function handleMouseLeave() {
    // console.log("leaved");
  }

  return (
    <div
      className="subtitle-container"
      style={{
        bottom: isControlsVisible ? "75px" : "10px",
        transition: "0.3s ease-in",
      }}
    >
      {getWordsFromSubtitle(currentSubtitle).map((word, index) => (
        <span key={index}>
          {!isPunctuation(word) ? (
            <span
              onClick={handleClick}
              className="word"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
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
