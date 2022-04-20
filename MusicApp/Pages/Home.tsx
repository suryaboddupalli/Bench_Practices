import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
  CardMedia,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { currSong } from "./../Redux/Action";
import { useNavigate } from "react-router-dom";
import { RootState } from "../Redux/Store";
import Navbar from "../Component/NavBar";
import Slides from "../Component/Slides";
import FooterPlayer from "../Component/FooterPlayer";
import { useEffect, useState } from "react";
import { songsData } from "../Redux/ActionTypes";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.songReducer.playlists);

  return (
    <div>
      <Navbar />
      {/* <Slides /> */}
      <Card>
        <Stack direction="row">
          <Typography variant="h4" color="secondary">
            Top Songs
          </Typography>
          <CardActions sx={{ marginLeft: "900px" }}>
            <Button color="secondary" onClick={() => navigate("/more")}>
              more songs
            </Button>
          </CardActions>
        </Stack>
        <CardContent>
          <Stack direction="row">
            {data &&
              data.map((song, index) => {
                if (index < 5) {
                  return (
                    <Button onClick={() => dispatch(currSong(song))}>
                      <Card
                        sx={{
                          width: 250,
                          height: 300,
                          borderRadius: "10px",
                          border: "2px solid grey",
                        }}
                      >
                        <CardMedia
                          height="250"
                          component="img"
                          src={song.img}
                          alt="img"
                        />
                        <CardContent>
                          <Typography variant="h6">
                            {song.title}-{song.song_name}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Button>
                  );
                }
              })}
          </Stack>
        </CardContent>
      </Card>
      <FooterPlayer />
    </div>
  );
}

export default Home;
