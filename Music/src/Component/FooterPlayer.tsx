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
import { useDispatch, useSelector } from "react-redux";
import { currSong, SongBanner } from "../Redux/Action";
import { RootState } from "../Redux/Store";
import { songsData } from "../Redux/ActionTypes";
import RepeatIcon from "@mui/icons-material/Repeat";
import RepeatOnIcon from "@mui/icons-material/RepeatOn";
import PlayButtons from "./PlayButtons";
import Volume from "./Volume";
import FormatTime from "./FormatTime";

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
  console.log(play);
  const [volume, setVolume] = useState<number>(50);
  const [muted, setMuted] = useState<boolean>(false);
  const [banner, setBanner] = useState<boolean>();
  const [repeat, setRepeat] = useState<boolean>(false);
  const [currTime, setCurrTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioElement = useRef<HTMLAudioElement | null>(null);

  const currSongData = JSON.parse(localStorage.getItem("currSong") || "{}");

  useEffect(() => {
    setBanner(storeBanner);
  }, []);

  const handleSongChange = (e: any) => {
    const audio: HTMLAudioElement | null = audioElement.current;
    let currplayTime: any = audio?.currentTime;
    {
      audio !== null &&
        (currplayTime = (audio?.duration / 100) * e.target.value);
    }
    const time: any = FormatTime(e.target.value);
    setCurrTime(time);
  };

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
  });

  return (
    <Stack
      direction="column"
      sx={{
        border: "1px solid",
      }}
    >
      <Card sx={{ display: "flex", height: "100px" }}>
        <Slider
          value={currTime}
          max={duration}
          //    onChange={handleSongChange}
        />
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
        <PlayButtons play={play} setPlay={setPlay} currId={curr?.id} />
        <div style={{ marginLeft: "20px", marginTop: "30px" }}>
          <p>
            <span>{FormatTime(currTime)}</span>/
            <span>{FormatTime(duration)}</span>
          </p>
          <IconButton onClick={() => setRepeat(!repeat)}>
            {repeat ? <RepeatOnIcon /> : <RepeatIcon />}
          </IconButton>
        </div>
        <Volume audioElement={audioElement} repeat={repeat} />
      </Card>
    </Stack>
  );
}

export default FooterPlayer;
