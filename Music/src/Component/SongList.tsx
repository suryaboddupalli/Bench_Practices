import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { makeStyles } from "@material-ui/styles";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { songsData } from "../Redux/ActionTypes";
import { currSong } from "../Redux/Action";

const useStyles = makeStyles({
  card: {
    "&:hover": {
      border: "2px solid grey",
    },
  },
  button: {
    "&:hover": {
      opacity: 0.4,
    },
  },
  img: {
    borderRadius: "15px",
    paddingLeft: "10px",
  },
});

export default function SongList() {
  const dispatch = useDispatch();
  const currentSong = useSelector(
    (state: RootState) => state.songReducer.currSong
  );
  const playlist = useSelector(
    (state: RootState) => state.songReducer.playlists
  );
  const [curr, setCurr] = useState<songsData>();
  const classes = useStyles();

  const currSongs = JSON.parse(localStorage.getItem("currSong") || "{}");

  useEffect(() => {
    if (currentSong) {
      setCurr(currentSong);
    } else {
      setCurr(currSongs);
    }
  }, [currSong, currentSong]);

  return (
    <Grid container>
      <Grid item xs={4}>
        <Box position="fixed">
          <Typography variant="h4" sx={{ fontSize: "40px" }}>
            Now Playing
          </Typography>
          <Typography variant="h6" sx={{ padding: "10px" }}>
            Playing from
          </Typography>
          <img
            className={classes.img}
            src={curr?.img}
            width="300px"
            height="300px"
          />
          <Typography variant="h5" sx={{ padding: "30px" }}>
            {curr?.title}-{curr?.song_name}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={8}>
        {playlist.map((song, index) => (
          <Card key={index} className={classes.card} sx={{ display: "flex" }}>
            <Button
              className={classes.button}
              onClick={() => dispatch(currSong(song))}
            >
              <CardMedia
                component="img"
                sx={{ width: 110, borderRadius: "5px" }}
                image={song.img}
              />
            </Button>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {song.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {song.song_name}
                </Typography>
              </CardContent>
            </Box>
            <IconButton sx={{ marginLeft: "400px" }}>
              <DownloadIcon />
            </IconButton>
            <IconButton>
              <MoreVertOutlinedIcon />
            </IconButton>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}
