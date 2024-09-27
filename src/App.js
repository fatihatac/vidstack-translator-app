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

function App() {
  const [videoFile, setVideoFile] = useState("");
  const [videoType, setVideoType] = useState("");
  const [videoName, setVideoName] = useState("");
  const [subFile, setSubFile] = useState(null);
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [subtitles, setSubtitles] = useState([]);

  const handleTimeUpdate = (event) => {
    const currentSub = subtitles.find(
      (subtitle) =>
        event.currentTime >= subtitle.startSeconds &&
        event.currentTime <= subtitle.endSeconds
    );
    setCurrentSubtitle(currentSub ? currentSub.text : "");
  };
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
              onTimeUpdate={handleTimeUpdate}
            >
              <MediaProvider>
                {currentSubtitle && (
                  <SubtitleDisplay currentSubtitle={currentSubtitle} />
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
