import { Box, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { useDispatch, useSelector } from "react-redux";
import { currSong } from "../Redux/Action";
import { RootState } from "../Redux/Store";

type props = {
  currId: any;
  play: boolean;
  setPlay: (active: boolean) => void;
};

function PlayButtons(props: props) {
  const [next, setNext] = useState<boolean>(false);
  const [prev, setPrev] = useState<boolean>(false);
  const dispatch = useDispatch();

  const playlist = useSelector(
    (state: RootState) => state.songReducer.playlists
  );

  useEffect(() => {
    if (next) {
      let currId = props.currId;
      dispatch(currSong(playlist[Math.floor(currId + 1) % playlist.length]));
      setNext(false);
    }
  }, [next]);

  useEffect(() => {
    if (prev) {
      let currId = props.currId;
      let currTrack = Math.floor(currId - 1) % playlist.length;
      if (currId - 1 === 0) {
        currTrack = playlist.length - 1;
      }
      dispatch(currSong(playlist[currTrack - 1]));
      setPrev(false);
    }
  }, [prev]);
  return (
    <Box sx={{ marginTop: "20px", marginLeft: "50px", display: "flex" }}>
      <IconButton onClick={() => setPrev(!prev)}>
        <SkipPreviousIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={() => props.setPlay(!props.play)}>
        {props.play ? (
          <PauseIcon color="secondary" fontSize="large" />
        ) : (
          <PlayArrowIcon fontSize="large" />
        )}
      </IconButton>
      <IconButton onClick={() => setNext(!next)}>
        <SkipNextIcon fontSize="large" />
      </IconButton>
    </Box>
  );
}

export default PlayButtons;
