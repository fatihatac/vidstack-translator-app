import React, { useState, useRef } from "react";
import "./VideoPlayer.css";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider, useMediaRemote } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import FileInput from "./FileInput";
import SubtitleDisplay from "./SubtitleDisplay";
import CloseButton from "./CloseButton";
import PlayButton from "./PlayButton";

function VideoPlayer() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoType, setVideoType] = useState(null);
  const [videoName, setVideoName] = useState(null);
  const [subFile, setSubFile] = useState(null);
  const [subFileName, setSubFileName] = useState(null);
  const [currentSubtitle, setCurrentSubtitle] = useState(null);
  const [subtitles, setSubtitles] = useState([]);
  const [isPlayButtonClicked, setPlayButtonClicked] = useState(false);

  const playerRef = useRef(null);
  const remote = useMediaRemote(playerRef);

  const handleTimeUpdate = (event) => {
    const currentSub = subtitles.find(
      (subtitle) =>
        event.currentTime >= subtitle.startSeconds &&
        event.currentTime <= subtitle.endSeconds
    );
    setCurrentSubtitle(currentSub ? currentSub.text : "");
  };
  function handleCloseClick() {
    // setVideoFile(null);
    // setVideoType(null);
    // setVideoName(null);
    // setSubFile(null);
    // setSubFileName(null);
    // setSubtitles([]);
    // setCurrentSubtitle(null);
    // setPlayButtonClicked(false);
    // setIsPlaying(false);
    // const inputs = document.querySelectorAll("input");
    // inputs.forEach((input) => (input.value = ""));
    window.location.reload();
  }
  function handlePlayClick() {
    setPlayButtonClicked(true);
  }

  function handleOnPlay() {
    remote.resumeControls();
  }

  function handleOnPause() {
    remote.pauseControls();
  }

  return (
    <div className="video-player-container">
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
            className="video-player"
            title={videoName}
            src={{
              src: videoFile,
              type: videoType,
            }}
            onTimeUpdate={handleTimeUpdate}
            onPlay={handleOnPlay}
            onPause={handleOnPause}
          >
            <CloseButton onClick={handleCloseClick} />
            <MediaProvider>
              {currentSubtitle && (
                <SubtitleDisplay
                  currentSubtitle={currentSubtitle}
                  remote={remote}
                />
              )}
            </MediaProvider>
            <DefaultVideoLayout icons={defaultLayoutIcons} />
          </MediaPlayer>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
