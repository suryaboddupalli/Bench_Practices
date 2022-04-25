import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { songsData } from "../Redux/ActionTypes";
import { currSong } from "../Redux/Action";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles({
  card: {
    "&:hover": {
      border: "2px solid grey",
      background: "#D3D3D3",
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

export default function Downloads() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const DSongs = useSelector((state: RootState) => state.songReducer.download);
  console.log(DSongs);
  return (
    <Box>
      {DSongs.map((song, index) => (
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
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Card>
      ))}
    </Box>
  );
}
