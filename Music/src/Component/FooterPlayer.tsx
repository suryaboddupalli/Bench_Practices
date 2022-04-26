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
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
// import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
// import SkipNextIcon from "@mui/icons-material/SkipNext";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import PauseIcon from "@mui/icons-material/Pause";
// import VolumeUpIcon from "@mui/icons-material/VolumeUp";
// import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import { useDispatch, useSelector } from "react-redux";
import { currSong, SongBanner } from "../Redux/Action";
import { RootState } from "../Redux/Store";
import { songsData } from "../Redux/ActionTypes";
import RepeatIcon from "@mui/icons-material/Repeat";
import RepeatOnIcon from "@mui/icons-material/RepeatOn";
import PlayButtons from "./PlayButtons";
import Volume from "./Volume";

function FooterPlayer() {
  const dispatch = useDispatch();
  const storeBanner = useSelector(
    (state: RootState) => state.songReducer.banner
  );
  const currentSong = useSelector(
    (state: RootState) => state.songReducer.currSong
  );
  // const playlist = useSelector(
  //   (state: RootState) => state.songReducer.playlists
  // );
  const [curr, setCurr] = useState<songsData>();
  const [play, setPlay] = useState<boolean>(false);
  console.log(play);
  const [volume, setVolume] = useState<number>(50);
  const [muted, setMuted] = useState<boolean>(false);
  const [banner, setBanner] = useState<boolean>();
  const [repeat, setRepeat] = useState<boolean>(false);
  const [currTime, setCurrTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioElement = useRef<HTMLAudioElement | null>(null);
  // const [next, setNext] = useState<boolean>(false);
  // const [prev, setPrev] = useState<boolean>(false);

  const currSongData = JSON.parse(localStorage.getItem("currSong") || "{}");

  // const handleAudioChange = (event: Event, newValue: number | number[]) => {
  //   setVolume(newValue as number);
  // };

  useEffect(() => {
    setBanner(storeBanner);
  }, []);

  useEffect(() => {
    if (currentSong) {
      setCurr(currentSong);
    } else {
      setCurr(currSongData);
    }
  }, [currSongData, currentSong]);

  useEffect(() => {
    play
      ? audioElement.current
          ?.play()
          .then(() => {})
          .catch(() => {
            audioElement.current?.pause();
          })
      : audioElement.current?.pause();
    audioElement.current &&
      (audioElement.current.onloadeddata = () => {
        if (audioElement.current != null) {
          setDuration(audioElement.current.duration);
        }
      });
    setInterval(() => {
      if (audioElement.current !== null)
        setCurrTime(audioElement.current.currentTime);
    });
    audioElement.current && (audioElement.current.loop = repeat);
    // audioElement.current && (audioElement.current.volume = volume / 100);
    // audioElement.current && (audioElement.current.muted = muted);
  });

  // useEffect(() => {
  //   if (next) {
  //     let currId: any = curr?.id;
  //     dispatch(currSong(playlist[Math.floor(currId + 1) % playlist.length]));
  //     setNext(false);
  //   }
  // }, [next]);

  // useEffect(() => {
  //   if (prev) {
  //     let currId: any = curr?.id;
  //     let currTrack = Math.floor(currId - 1) % playlist.length;
  //     if (currId - 1 === 0) {
  //       currTrack = playlist.length - 1;
  //     }
  //     dispatch(currSong(playlist[currTrack - 1]));
  //     setPrev(false);
  //   }
  // }, [prev]);

  function formatTime(secs: number) {
    return (
      Math.floor(secs / 60) + ":" + ("0" + Math.floor(secs % 60)).slice(-2)
    );
  }
  return (
    <Stack
      direction="column"
      sx={{
        border: "1px solid",
      }}
    >
      <Card sx={{ display: "flex", height: "100px" }}>
        <Button onClick={() => dispatch(SongBanner(!banner))}>
          <CardMedia
            image={curr?.img}
            component="img"
            sx={{ width: 110, borderRadius: "5px", height: "80px" }}
          />
        </Button>
        <Box>
          <CardContent>
            <Typography variant="h5">{curr?.title}</Typography>
            <Typography variant="h6">{curr?.song_name}</Typography>
          </CardContent>
        </Box>
        <audio ref={audioElement} src={curr?.song} />
        {/* <Box sx={{ marginTop: "20px", marginLeft: "50px", display: "flex" }}>
          <IconButton onClick={() => setPrev(!prev)}>
            <SkipPreviousIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={() => setPlay(!play)}>
            {play ? (
              <PauseIcon color="secondary" fontSize="large" />
            ) : (
              <PlayArrowIcon fontSize="large" />
            )}
          </IconButton>
          <IconButton onClick={() => setNext(!next)}>
            <SkipNextIcon fontSize="large" />
          </IconButton>
        </Box> */}
        <PlayButtons play={play} setPlay={setPlay} currId={curr?.id} />
        <div style={{ marginLeft: "20px", marginTop: "30px" }}>
          <p>
            <span>{formatTime(currTime)}</span>/
            <span>{formatTime(duration)}</span>
          </p>
          <IconButton onClick={() => setRepeat(!repeat)}>
            {repeat ? <RepeatOnIcon /> : <RepeatIcon />}
          </IconButton>
        </div>
        {/* <Box sx={{ width: 200, marginLeft: "20px", marginTop: "30px" }}>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <IconButton onClick={() => setMuted(!muted)}>
              {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
            </IconButton>
            <Slider value={volume} onChange={handleAudioChange} />
          </Stack>
        </Box> */}
        <Volume audioElement={audioElement} repeat={repeat} />
      </Card>
    </Stack>
  );
}

export default FooterPlayer;
