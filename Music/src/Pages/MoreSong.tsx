import {
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
  CardMedia,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FooterPlayer from "../Component/FooterPlayer";
import Navbar from "../Component/NavBar";
import { RootState } from "../Redux/Store";
import { currSong } from "./../Redux/Action";

function MoreSongs() {
  const data = useSelector((state: RootState) => state.songReducer.playlists);
  const lang = useSelector((state: RootState) => state.songReducer.language);
  const dispatch = useDispatch();
  return (
    <Stack spacing={3}>
      <Navbar />
      <Typography variant="h4">Top songs</Typography>
      <Grid container>
        {data
          .filter((song) => {
            if (song.lang.toLowerCase().includes(lang.toLocaleLowerCase())) {
              return song;
            }
          })
          .map((song, index) => (
            <Grid key={index} item xs={3} spacing={4}>
              <Button onClick={() => dispatch(currSong(song))}>
                <Card sx={{ width: 270, height: 300 }}>
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
            </Grid>
          ))}
      </Grid>
      <div style={{ marginTop: "10px" }}>
        <FooterPlayer />
      </div>
    </Stack>
  );
}

export default MoreSongs;
