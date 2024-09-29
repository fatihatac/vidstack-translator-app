import React, { useState, useRef } from "react";
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
import PlayButton from "./components/PlayButton";

function App() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoType, setVideoType] = useState(null);
  const [videoName, setVideoName] = useState(null);
  const [subFile, setSubFile] = useState(null);
  const [subFileName, setSubFileName] = useState(null);
  const [currentSubtitle, setCurrentSubtitle] = useState(null);
  const [subtitles, setSubtitles] = useState([]);
  const [isControlsVisible, setControlsVisible] = useState(false);
  const [isPlayButtonClicked, setPlayButtonClicked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const playerRef = useRef(null);

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
    // const controlsContainer = document.querySelector(".vds-controls");
    // if (!isPlaying && controlsContainer) {
    //   // Video duraklatıldıysa kontrolleri her zaman görünür yap
    //   controlsContainer.style.opacity = "1";
    //   controlsContainer.style.visibility = "visible";
    // } else if (controlsContainer) {
    //   // Video oynuyorsa varsayılan davranışa geri dön
    //   controlsContainer.style.opacity = "";
    //   controlsContainer.style.visibility = "";
    // }
  }
  function handleCloseClick() {
    setVideoFile(null);
    setVideoType(null);
    setVideoName(null);
    setSubFile(null);
    setSubFileName(null);
    setSubtitles([]);
    setCurrentSubtitle(null);
    setPlayButtonClicked(false);
    setIsPlaying(false);
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => (input.value = ""));
  }
  function handlePlayClick() {
    setPlayButtonClicked(true);
  }
  function handleOnPlay() {
    setIsPlaying(true);
  }
  function handleOnPause() {
    setIsPlaying(false);
  }

  return (
    <>
      <div className="app">
        <div className="controls-container">
          <FileInput
            setVideoFile={setVideoFile}
            setSubtitles={setSubtitles}
            setSubFile={setSubFile}
            setVideoType={setVideoType}
            setVideoName={setVideoName}
            setSubFileName={setSubFileName}
            videoName={videoName}
            subFileName={subFileName}
          />
          <PlayButton
            onClick={handlePlayClick}
            disabled={!videoFile || !subFile}
          />
        </div>
        {videoFile && subFile && isPlayButtonClicked && (
          <div id="player-container">
            <MediaPlayer
              ref={playerRef}
              title={videoName}
              src={{ src: videoFile, type: videoType }}
              muted={true}
              onTimeUpdate={handleTimeUpdate}
              onControlsChange={handleControlsChange}
              onPlay={handleOnPlay}
              onPause={handleOnPause}
              paused={isPaused}
              controlsDelay={isPaused ? 1000000 : 2500}
            >
              <CloseButton onClick={handleCloseClick} />
              <MediaProvider>
                {currentSubtitle && (
                  <SubtitleDisplay
                    currentSubtitle={currentSubtitle}
                    isControlsVisible={isControlsVisible}
                    isPlaying={isPlaying}
                    setIsPaused={setIsPaused}
                    setControlsVisible={setControlsVisible}
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
