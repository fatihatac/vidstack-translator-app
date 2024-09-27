import React from "react";

function SubtitleDisplay({ currentSubtitle, setIsPlaying }) {
  // function removeHtmlTags(text) {
  //   console.log(text);

  //   console.log(text.replace(/<[^>]*>/g, ""));

  //   return text.replace(/<[^>]*>/g, "");
  // }

  function getWordsFromSubtitle(subtitle) {
    if (!subtitle) return [];
    // const cleanedSubtitle = removeHtmlTags(subtitle);
    const wordsAndPunctuation = subtitle
      .replace(/\n/g, " ")
      .split(/(\s+|[.,!?;:])/)
      .filter((word) => word.trim() !== "");

    console.log(wordsAndPunctuation);

    return wordsAndPunctuation;
  }
  function isPunctuation(word) {
    return /[.,!?;:]/.test(word); // Noktalama işareti kontrolü
  }

  function handleClick(event) {
    console.log(event.target.innerText);
  }

  function handleMouseEnter(event) {
    console.log(event.target.innerText);
  }

  function handleMouseLeave() {
    // console.log("leaved");
  }

  return (
    <div className="subtitle-container">
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
