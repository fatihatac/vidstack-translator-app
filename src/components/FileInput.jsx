import React from "react";
import Input from "./Input";
import srtParser2 from "srt-parser-2";
import { Stack } from "@mui/material";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import VideoFileIcon from "@mui/icons-material/VideoFile";

function FileInput({
  setSubFile,
  setSubtitles,
  setVideoFile,
  setVideoType,
  setVideoName,
  setSubFileName,
  subFileName,
  videoName,
}) {
  function handleSubtitleFileUpload(event) {
    const file = event.target.files[0];
    setSubFile(file);
    setSubFileName(file.name);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileContent = e.target.result;

        const parser = new srtParser2();
        try {
          const srtData = parser.fromSrt(fileContent);
          setSubtitles(srtData);
        } catch (error) {
          console.error("SRT dosyası işlenirken hata:", error);
        }
      };

      reader.readAsText(file);
    }
  }

  function handleVideoFileChange(event) {
    const file = event.target.files[0];
    setVideoFile(URL.createObjectURL(file));
    setVideoType(file.type);
    setVideoName(file.name);
  }

  return (
    <div className="controls">
      <Stack spacing={2}>
        <Stack direction="row" alignItems="center">
          <Input
            type="file"
            fileType="video"
            accept="video/*"
            onChange={handleVideoFileChange}
            endIcon={<VideoFileIcon />}
            fileName={videoName}
            title="Upload a Video File"
          />
        </Stack>
        <Stack direction="row" alignItems="center">
          <Input
            type="file"
            fileType="sub"
            accept=".srt"
            onChange={handleSubtitleFileUpload}
            endIcon={<SubtitlesIcon />}
            fileName={subFileName}
            title="Upload a Subtitle File"
          />
        </Stack>
      </Stack>
    </div>
  );
}

export default FileInput;
