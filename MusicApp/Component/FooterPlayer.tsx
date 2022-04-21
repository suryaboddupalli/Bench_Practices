import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Button,
  Typography,
  IconButton,
  Slider,
} from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Box } from "@mui/system";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React, { useEffect, useRef, useState } from "react";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { useDispatch, useSelector } from "react-redux";
import { SongBanner } from "../Redux/Action";
import { RootState } from "../Redux/Store";
import { songsData } from "../Redux/ActionTypes";

function FooterPlayer() {
  const dispatch = useDispatch();
  const storeBanner = useSelector(
    (state: RootState) => state.songReducer.banner
  );
  const currentSong = useSelector(
    (state: RootState) => state.songReducer.currSong
  );
  const [curr, setCurr] = useState<songsData>();
  const [play, setPlay] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(30);
  const [audioOpen, setAudioOpen] = useState<boolean>(false);
  const [banner, setBanner] = useState<boolean>();
  const audioElement = useRef<HTMLAudioElement | null>(null);

  const currSong = JSON.parse(localStorage.getItem("currSong") || "{}");

  const handleAudioChange = (event: Event, newValue: number | number[]) => {
    setVolume(newValue as number);
  };

  useEffect(() => {
    setBanner(storeBanner);
  }, []);

  useEffect(() => {
    if (currentSong) {
      setCurr(currentSong);
      setPlay(true);
    } else {
      setCurr(currSong);
    }
  }, [currSong, currentSong]);

  useEffect(() => {
    play
      ? audioElement.current
          ?.play()
          .then(() => {})
          .catch(() => {
            audioElement.current?.pause();
          })
      : audioElement.current?.pause();
  });

  return (
    <Stack
      direction="column"
      sx={{
        mariginTop: "100%",
        marginRight: "200px",
        marginLeft: "200px",
        position: "fixed",
        border: "1px solid",
      }}
    >
      <Card sx={{ display: "flex" }}>
        <Button onClick={() => dispatch(SongBanner(!banner))}>
          <CardMedia
            image={curr?.img}
            component="img"
            sx={{ width: 110, borderRadius: "5px" }}
          />
        </Button>
        <Box>
          <CardContent>
            <Typography variant="h5">{curr?.title}</Typography>
            <Typography variant="h6">{curr?.song_name}</Typography>
          </CardContent>
        </Box>
        <audio ref={audioElement} src={curr?.song} />
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
