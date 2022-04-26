import { IconButton, Slider, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

type props = {
  audioElement: any;
  repeat: any;
};

function Volume(props: props) {
  const [volume, setVolume] = useState<number>(50);
  const [muted, setMuted] = useState<boolean>(false);

  const handleAudioChange = (event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  useEffect(() => {
    // props.audioElement.current &&
    props.audioElement.current.loop = props.repeat;
    // props.audioElement.current &&
    props.audioElement.current.volume = volume / 100;
    // props.audioElement.current &&
    props.audioElement.current.muted = muted;
  });
  return (
    <Box sx={{ width: 200, marginLeft: "20px", marginTop: "30px" }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <IconButton onClick={() => setMuted(!muted)}>
          {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
        <Slider value={volume} onChange={handleAudioChange} />
      </Stack>
      <Volume audioElement={props.audioElement} repeat={props.repeat} />
    </Box>
  );
}

export default Volume;
