import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Button,
  Typography,
  IconButton,
  Slider,
  Tooltip,
} from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Box, fontSize } from "@mui/system";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React, { useEffect, useRef, useState } from "react";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";

function FooterPlayer(props: any) {
  const data = useSelector(
    (state: RootState) => state.songReducer.Current_Song
  );
  const [currSong, setCurrSong] = useState<any>();
  const [play, setPlay] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(30);
  const [audioOpen, setAudioOpen] = useState<boolean>(false);
  const audioElement = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setCurrSong(data);
  }, [data]);

  console.log(currSong);

  const handleAudioChange = (event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  return (
    <Stack
      direction="column"
      sx={{
        marginRight: "200px",
        marginLeft: "200px",
        position: "fixed",
        border: "1px solid",
      }}
    >
      <Card sx={{ display: "flex" }}>
        <Button onClick={() => props.setIsOpen(true)}>
          <CardMedia
            image={currSong.img}
            component="img"
            sx={{ width: 110, borderRadius: "5px" }}
          />
        </Button>
        <Box>
          <CardContent>
            <Typography variant="h5">{currSong.title}</Typography>
            <Typography variant="h6">{currSong.song_name}</Typography>
          </CardContent>
        </Box>
        <audio ref={audioElement} src={currSong.song} />
        <Box sx={{ marginTop: "20px", marginLeft: "50px", display: "flex" }}>
          <IconButton>
            <SkipPreviousIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={() => setPlay(!play)}>
            {play ? (
              <PauseIcon color="secondary" fontSize="large" />
            ) : (
              <PlayArrowIcon fontSize="large" />
            )}
          </IconButton>
          <IconButton size="large">
            <SkipNextIcon fontSize="large" />
          </IconButton>
        </Box>
        <div style={{ marginLeft: "20px", marginTop: "30px" }}>
          <p>
            <span>0.00</span>/<span>4.15</span>
          </p>
        </div>
        <Box sx={{ width: 200, marginLeft: "20px", marginTop: "30px" }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <IconButton>
              <VolumeUpIcon onClick={() => setAudioOpen(!audioOpen)} />
            </IconButton>
            {audioOpen ? (
              <Slider value={volume} onChange={handleAudioChange} />
            ) : null}
          </Stack>
        </Box>
      </Card>
    </Stack>
  );
}

export default FooterPlayer;
