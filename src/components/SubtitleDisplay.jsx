import React from "react";

function SubtitleDisplay({ currentSubtitle, remote }) {
  function getWordsFromSubtitle(subtitle) {
    if (!subtitle) return [];
    const wordsAndPunctuation = subtitle
      .replace(/<[^>]*>|\n/g, " ")
      .split(/(\s+|[.,!?;:()[\]-])/)
      .filter((word) => word.trim() !== "");

    return wordsAndPunctuation;
  }
  function isPunctuation(word) {
    return /[.,!?;:()[\]-]/.test(word);
  }
  function Word({ word }) {
    return isPunctuation(word) ? (
      <>{word}</>
    ) : (
      <span className="word">{word}</span>
    );
  }

  function handleContainerMouseEnter(event) {
    remote.pause();
  }

  function handleContainerMouseLeave() {
    remote.play();
  }

  function handleWordMouseEnter(event) {
    console.log(event.target.innerText);
  }
  function handleWordMouseLeave() {
    console.log("Word left");
  }

  return (
    <div className="vds-captions">
      <div className="subtitle-container">
        <div className="cues">
          <span
            className="subs"
            onMouseEnter={handleContainerMouseEnter}
            onMouseLeave={handleContainerMouseLeave}
          >
            {getWordsFromSubtitle(currentSubtitle).map((word, index) => (
              <span
                key={index}
                style={{ position: "relative" }}
                onMouseEnter={handleWordMouseEnter}
                onMouseLeave={handleWordMouseLeave}
              >
                <Word word={word} />
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SubtitleDisplay;
