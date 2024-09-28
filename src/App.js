import React, { useState } from "react";
import "./App.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import FileInput from "./components/FileInput";
import SubtitleDisplay from "./components/SubtitleDisplay";
import CloseButton from "./components/CloseButton";

function App() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoType, setVideoType] = useState(null);
  const [videoName, setVideoName] = useState(null);
  const [subFile, setSubFile] = useState(null);
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [subtitles, setSubtitles] = useState([]);
  const [isControlsVisible, setControlsVisible] = useState(false);

  const handleTimeUpdate = (event) => {
    const currentSub = subtitles.find(
      (subtitle) =>
        event.currentTime >= subtitle.startSeconds &&
        event.currentTime <= subtitle.endSeconds
    );
    setCurrentSubtitle(currentSub ? currentSub.text : "");
  };

  function handleControlsChange(event) {
    setControlsVisible(event);
  }

  function handleClick() {
    setVideoFile(null);
    setVideoName(null);
    setSubFile(null);
    setVideoType(null);
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
  }

  return (
    <>
      <div className="app">
        <FileInput
          setVideoFile={setVideoFile}
          setSubtitles={setSubtitles}
          setSubFile={setSubFile}
          setVideoType={setVideoType}
          setVideoName={setVideoName}
        />
        {videoFile && subFile && (
          <div id="player-container">
            <MediaPlayer
              title={videoName}
              src={{ src: videoFile, type: videoType }}
              muted={true}
              onTimeUpdate={handleTimeUpdate}
              onControlsChange={handleControlsChange}
            >
              <CloseButton onClick={handleClick} />
              <MediaProvider>
                {currentSubtitle && (
                  <SubtitleDisplay
                    currentSubtitle={currentSubtitle}
                    isControlsVisible={isControlsVisible}
                  />
                )}
              </MediaProvider>
              <DefaultVideoLayout icons={defaultLayoutIcons} />
            </MediaPlayer>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
